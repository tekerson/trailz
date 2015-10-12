/* @flow */

import { fromJson as parksFromJson } from "./parks";
import { toJson as parkToJson } from "./park";

export { parksFromJson, parkToJson };

type Bind<T> = (f: ((t: T) => any)) => any
export type Result<T>
  = { success: 1, result: T, bind: Bind<T> }
  | { success: 0, error: Error, bind: Bind<T> };

export function success<T>(result: T): Result<T> {
  let bind = function (then: (t: T) => Result<T>): Result<T> {
    return then(result);
  };
  return Object.freeze({
    success: 1,
    result,
    bind,
  });
}

export function fail<T>(error: Error): Result<T> {
  let self = Object.freeze({
    success: 0,
    error,
    bind: function (_then: (t: T) => Result<T>): Result<T> {
      return self;
    },
  });
  return self;
}

export function sequence<T>(results: Array<Result<T>>): Result<Array<T>> {
  var ret = [];
  for (var i = 0; i < results.length; i++) {
    let result = results[i];
    if (result.success === 0) {
      return result;
    }
    if (result.success === 1) {
      ret.push(result.result);
    }
  }
  return success(ret);
}

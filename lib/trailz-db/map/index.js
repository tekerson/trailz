/* @flow */

import { fromJson as parksFromJson } from "./parks";
import { toJson as parkToJson } from "./park";

export { parksFromJson, parkToJson };

export function success<T>(result: T): Promise<T> {
  return Promise.resolve(result);
}

export function fail<T>(error: Error): Promise<T> {
  return Promise.reject(error);
}

/* @flow */

export type Name = {
  value: string,
  toString: () => string,
};

type Spec = string;

export default function name (value: Spec): Promise<Name> {
  let toString = function () {
    return value;
  };
  if (value.length > 100) {
    return Promise.reject(new TooLongError());
  }
  return Promise.resolve(Object.freeze({
    value,
    toString,
  }));
}

export class NameError extends Error {}
class TooLongError extends NameError {}

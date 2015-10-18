/* @flow */

export type Id = {
  valueOf: () => string,
  toString: () => string,
};

type Spec = string;

export default function id (value: Spec): Promise<Id> {
  let valueOf = function () {
        return value;
      },
      toString = function () {
        return value;
      };

  if (!value.startsWith("TRAIL-")) {
    return Promise.reject(new InvalidPrefixError());
  }

  return Promise.resolve(Object.freeze({
    valueOf,
    toString,
  }));
}

class IdError extends Error {}
class InvalidPrefixError extends IdError {}

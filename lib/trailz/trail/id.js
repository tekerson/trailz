/* @flow */

export type Id = {
  valueOf: () => string,
  toString: () => string,
  equals: (id: Id) => boolean,
};

type Spec = string;

export default function id (value: Spec): Promise<Id> {
  let valueOf = function () {
        return value;
      },
      toString = function () {
        return value;
      },
      equals = function (other) {
        return value === other.valueOf();
      };

  if (!value.startsWith("TRAIL-")) {
    return Promise.reject(new InvalidPrefixError());
  }

  return Promise.resolve(Object.freeze({
    valueOf,
    toString,
    equals,
  }));
}

class IdError extends Error {}
class InvalidPrefixError extends IdError {}

/* @flow */

export type Type = {
  toString: () => string,
};

type Spec = string;

export function id (value: Spec): Type {
  let toString = function () {
    return value;
  };
  return Object.freeze({
    value,
    toString,
  });
}

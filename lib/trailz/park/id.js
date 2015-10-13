/* @flow */

export type Id = {
  toString: () => string,
};

type Spec = string;

export default function id (value: Spec): Id {
  let toString = function () {
    return value;
  };
  return Object.freeze({
    toString,
  });
}

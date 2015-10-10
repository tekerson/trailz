/* @flow */

export type Type = {
  value: string,
};

type Spec = string;

export function id (spec: Spec): Type {
  let value = spec,
      toString = function () {
        return value;
      };
  return Object.freeze({
    value,
    toString
  });
}

/* @flow */

export type Name = {
  value: string,
};

type Spec = string;

export default function name (spec: Spec): Name {
  let value = spec,
      toString = function () {
        return value;
      };
  return Object.freeze({
    value,
    toString
  });
}

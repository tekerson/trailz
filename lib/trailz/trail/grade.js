/* @flow */

export type Type = {
  toString: () => string,
  toNumber: () => number,
};

type Spec = number;

export function grade (value: Spec): Type|GradeError {
  let toString = function () {
        return value.toString();
      },
      toNumber = function () {
        return value;
      };
  if (value < 0 || value > 10) {
    return new GradeRangeError();
  }
  return Object.freeze({
    value,
    toString,
    toNumber,
  });
}

export class GradeError extends Error {}
class GradeRangeError extends GradeError {}

/* @flow */

export type Grade = {
  toString: () => string,
  valueOf: () => number,
};

type Spec = number;

export default function grade (value: Spec): Grade|GradeError {
  let valueOf = function () {
        return value;
      },
      toString = function () {
        return value.toString();
      };

  if (value < 0 || value > 10) {
    return new GradeRangeError();
  }

  return Object.freeze({
    valueOf,
    toString,
  });
}

class GradeError extends Error {}
class GradeRangeError extends GradeError {}

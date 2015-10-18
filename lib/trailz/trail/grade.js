/* @flow */

export type Grade = {
  toString: () => string,
  value: number,
};

type Spec = number;

export default function grade (value: Spec): Promise<Grade> {
  let toString = function () {
    return value.toString();
  };

  if (value < 0 || value > 10) {
    return Promise.reject(new GradeRangeError());
  }

  return Promise.resolve(Object.freeze({
    value,
    toString,
  }));

}

class GradeError extends Error {}
class GradeRangeError extends GradeError {}

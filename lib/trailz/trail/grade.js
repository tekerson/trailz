/* @flow */

export type Type = Grade;

function Grade (value: number): Grade {
  this.value = value;
  return Object.freeze(this);
}

class GradeError extends Error {}
class GradeRangeError extends Error {}

type Spec = number;

export function grade (grade: Spec): Grade|GradeError {
  if (grade < 0 || grade > 10) {
    return new GradeRangeError();
  }
  return new Grade(grade);
}

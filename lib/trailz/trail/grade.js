/* @flow */

export type Type = Grade;

declare class Grade {
  value: number,
}
function Grade (value: number): Grade {
  this.value = value;
  return Object.freeze(this);
}

export class GradeError extends Error {}
class GradeRangeError extends GradeError {}

type Spec = number;

export function grade (grade: Spec): Grade|GradeError {
  if (grade < 0 || grade > 10) {
    return new GradeRangeError();
  }
  return new Grade(grade);
}

export function isError (grade: Grade|GradeError): boolean {
  return grade instanceof GradeError;
}

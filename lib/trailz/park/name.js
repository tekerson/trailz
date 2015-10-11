/* @flow */

export type Type = {
  value: string,
};

type Spec = string;

export function name (value: Spec): Type|NameError {
  let toString = function () {
    return value;
  };
  if (value.length > 100) {
    return new TooLongError();
  }
  return Object.freeze({
    value,
    toString
  });
}

export class NameError extends Error {}
class TooLongError extends NameError {}

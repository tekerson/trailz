/* @flow */

export type Type = Name;

function Name (value: string): Name {
  this.value = value;
  return Object.freeze(this);
}

Name.prototype.toString = function () {
  return this.value;
};

type Spec = string;

class NameError extends TypeError {}
class TooLongError extends NameError {}

export function name (value: Spec): Name|NameError {
  if (value.length > 100) {
    return new TooLongError();
  }
  return new Name(value);
}

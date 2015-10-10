/* @flow */

export type Type = Id;

function Id (value: string): Id {
  this.value = value;
  return Object.freeze(this);
}

Id.prototype.toString = function () {
  return this.value;
};

type Spec = string;

export function id (value: Spec): Id {
  return new Id(value);
}

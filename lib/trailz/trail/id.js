/* @flow */

export type Type = Id;

function Id (id: string): Id {
  this.id = id;
  return Object.freeze(this);
}

Id.prototype.toString = function () {
  return this.id;
};

type Spec = string;

export function id (value: Spec): Id {
  return new Id(value);
}

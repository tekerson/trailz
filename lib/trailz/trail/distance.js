/* @flow */

export type Json = [number, string];

export type Distance = Metres|Kilometres;
export type Type = Distance;

function Metres (value: number): Metres {
  this.value = value;
  return Object.freeze(this);
}

Metres.prototype.toString = function () {
  return this.value + 'm';
};

function Kilometres (value: number): Kilometres {
  this.value = value;
  return Object.freeze(this);
}

Kilometres.prototype.toString = function () {
  return this.value + 'km';
};

class DistanceError extends Error {}
class InvalidUnitError extends DistanceError {}

export type Spec = [number, string];

export function distance(spec: Spec): Distance {
  let [value, unit] = spec;
  switch (unit) {
    case 'km':
      return kilometres(value);
    case 'm':
      return metres(value);
    default:
      return new InvalidUnitError();
  }
}

export function kilometres(value: number): Kilometres {
  return new Kilometres(value);
}

export function metres(value: number): Metres {
  return new Metres(value);
}

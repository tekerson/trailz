/* @flow */

export type Distance = Metres|Kilometres;
export type Type = Distance;

type Metres = {
  unit: 'm',
  value: number,
  toString: () => string,
}

type Kilometres = {
  unit: 'km',
  value: number,
  toString: () => string,
}

export class DistanceError extends Error {}
class InvalidUnitError extends DistanceError {}

type Spec = [number, string];

export function distance(spec: Spec): Metres|Kilometres|DistanceError {
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

function kilometres (value: number): Kilometres {
  let unit = 'km',
      toString = function () {
        return value + unit;
      };
  return Object.freeze({
    unit,
    value,
    toString,
  });
}

function metres (value: number): Metres {
  let unit = 'm',
      toString = function () {
        return value + unit;
      };
  return Object.freeze({
    unit,
    value,
    toString,
  });
}

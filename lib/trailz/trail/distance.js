/* @flow */

export type Distance = Metres|Kilometres;

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

type Spec = [number, string];

export default function distance (spec: Spec): Promise<Distance> {
  let [value, unit] = spec;
  switch (unit) {
    case "km":
      return Promise.resolve(kilometres(value));
    case "m":
      return Promise.resolve(metres(value));
    default:
      return Promise.reject(new InvalidUnitError());
  }
}

function kilometres (value: number): Kilometres {
  let unit = "km",
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
  let unit = "m",
      toString = function () {
        return value + unit;
      };
  return Object.freeze({
    unit,
    value,
    toString,
  });
}

export class DistanceError extends Error {}
class InvalidUnitError extends DistanceError {}

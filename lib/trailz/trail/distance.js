/* @flow */

export type Distance = Metres|Kilometres;

type Kilometres = {
  toString: () => string,
  valueOf: () => number,
  unitOf: () => string,
  add: (distance: Distance) => Kilometres,
  greaterThan: (distance: Distance) => boolean,
}

type Metres = {
  toString: () => string,
  valueOf: () => number,
  unitOf: () => string,
  add: (distance: Distance) => Distance,
  greaterThan: (distance: Distance) => boolean,
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

export function kilometres (value: number): Kilometres {
  let toString = function () {
        return value + "km";
      },
      valueOf = function () {
        return value;
      },
      unitOf = function () {
        return "km";
      },
      add = function (other) {
        return other.add.kilometres(value);
      },
      greaterThan = function (other) {
        return other.greaterThan.kilometres(value);
      };

  add.metres = function (other) {
    return metres((value * 1000) + other);
  };
  add.kilometres = function (other) {
    return kilometres(value + other);
  };

  greaterThan.kilometres = function (other) {
    return (other * 1000) > other;
  };
  greaterThan.metres = function (other) {
    return other > (value * 1000);
  };

  return Object.freeze({
    add,
    greaterThan,
    valueOf,
    unitOf,
    toString,
  });
}

export function metres (value: number): Metres {
  let toString = function () {
        return value + "m";
      },
      valueOf = function () {
        return value;
      },
      unitOf = function () {
        return "km";
      },
      add = function (other) {
        return other.add.metres(value);
      },
      greaterThan = function (other) {
        return other.greaterThan.metres(value);
      };

  add.metres = function (other) {
    return metres(value + other);
  };
  add.kilometres = function (other) {
    return metres(value + (other * 1000));
  };

  greaterThan.kilometres = function (other) {
    return other > value;
  };
  greaterThan.metres = function (other) {
    return (other * 1000) > other;
  };

  return Object.freeze({
    add,
    greaterThan,
    valueOf,
    unitOf,
    toString,
  });
}

export class DistanceError extends Error {}
class InvalidUnitError extends DistanceError {}

/* @flow */

export type Distance = Metres|Kilometres;

var km = Symbol("kilometres");
var m = Symbol("metres");

// $FlowIssue
var unitKey = Symbol("unit");
// $FlowIssue
var valueKey = Symbol("value");

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
  let unit = km,
      toString = function () {
        return value + "km";
      },
      valueOf = function () {
        return value;
      },
      unitOf = function () {
        return "km";
      },
      add = function (other) {
        switch (other[unitKey]) {
          case km: return kilometres(value + other[valueKey]);
          case m: return kilometres((value * 1000) + other[valueKey]);
          default: throw new TypeError();
        }
      },
      greaterThan = function (other) {
        switch (other[unitKey]) {
          case km: return value > other[valueKey];
          case m: return (value * 1000) > other[valueKey];
          default: throw new TypeError();
        }
      };
  return Object.freeze({
    // $FlowIssue
    [unitKey]: unit,
    // $FlowIssue
    [valueKey]: value,
    add,
    greaterThan,
    valueOf,
    unitOf,
    toString,
  });
}

export function metres (value: number): Metres {
  let unit = m,
      toString = function () {
        return value + "m";
      },
      valueOf = function () {
        return value;
      },
      unitOf = function () {
        return "km";
      },
      add = function (other) {
        switch (other[unitKey]) {
          case km: return kilometres(value + (other[valueKey] * 1000));
          case m: return metres(value + other[valueKey]);
          default: throw new TypeError();
        }
      },
      greaterThan = function (other) {
        switch (other[unitKey]) {
          case km: return value > (other[valueKey] * 1000);
          case m: return value > other[valueKey];
          default: throw new TypeError();
        }
      };
  return Object.freeze({
    // $FlowIssue
    [unitKey]: unit,
    // $FlowIssue
    [valueKey]: value,
    add,
    greaterThan,
    valueOf,
    unitOf,
    toString,
  });
}

export class DistanceError extends Error {}
class InvalidUnitError extends DistanceError {}

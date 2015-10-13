/* @flow */

import type { Name } from "./name";
import type { Grade } from "./grade";
import type { Distance } from "./distance";

import name from "./name";
import grade from "./grade";
import distance from "./distance";

export { name, distance, grade };

export type Fields = {
  name: Name,
  distance: Distance,
  grade: Grade,
};

type Spec = {
  name: Name,
  distance: Distance,
  grade: Grade,
};

export default function fields (spec: Spec): Fields {
  return Object.freeze(spec);
}

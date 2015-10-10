/* @flow */

export type Type = Fields;

import * as Grade from './grade';
import * as Name from './name';
import * as Distance from './distance';
export { Name, Distance, Grade }

declare class Fields {
  name: Name.Type,
  distance: Distance.Type,
  grade: Grade.Type,
}

function Fields (name: Name.Type, distance: Distance.Type, grade: Grade.Type): Fields {
  this.name = name;
  this.distance = distance;
  this.grade = grade;
  return Object.freeze(this);
}

export type Spec = {
  name: Name.Type,
  distance: Distance.Type,
  grade: Grade.Type,
};

export function fields (spec: Spec): Fields {
  let { name, distance, grade } = spec
  return new Fields(name, distance, grade);
}

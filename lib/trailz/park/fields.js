/* @flow */

export type Type = Fields;

import * as Name from './name';
import * as Trail from '../trail';
export { Name, Trail };

function Fields (name: Name.Type, trails: Trails): Fields {
  this.name = name;
  this.trails = trails;
  return Object.freeze(this);
}

type Trails = Array<Trail.Type>;

export type Spec = {
  name: Name.Type,
  trails: Trails,
};

export function fields (spec: Spec): Fields {
  let { name, trails } = spec
  return new Fields(name, trails);
}

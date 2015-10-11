/* @flow */

import * as Name from './name';
import * as Trail from '../trail';
export { Name, Trail };

export type Type = {
  name: Name.Type,
  trails: Trails
};

export type Trails = Array<Trail.Type>;

type Spec = {
  name: Name.Type,
  trails: Trails,
};

export function fields (spec: Spec): Type {
  return Object.freeze(spec);
}

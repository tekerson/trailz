/* @flow */

import * as Grade from "./grade";
import * as Name from "./name";
import * as Distance from "./distance";
export { Name, Distance, Grade };

export type Type = {
  name: Name.Type,
  distance: Distance.Type,
  grade: Grade.Type,
};

type Spec = {
  name: Name.Type,
  distance: Distance.Type,
  grade: Grade.Type,
};

export function fields (spec: Spec): Type {
  return Object.freeze(spec);
}

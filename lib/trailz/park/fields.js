/* @flow */

import type { Name } from "./name";
import type { Trail } from "../trail";

import name from "./name";

export { name };

export type Fields = {
  name: Name,
  trails: Trails,
};

export type Trails = Array<Trail>;

type Spec = {
  name: Name,
  trails: Trails,
};

export default function fields (spec: Spec): Fields {
  return Object.freeze(spec);
}

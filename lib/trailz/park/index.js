/* @flow */

import type { Id } from "./id";
import type { Fields, Trails } from "./fields";
import type { Trail } from "../trail";

import type { Name } from "./name";

export type Park = {
  id: Id,
  name: Name,
  trails: Trails,
  hasTrail: (trail: Trail) => boolean,
};

type Spec = {
  id: Id,
  fields: Fields,
};

export default function park (spec: Spec): Park {
  let id = spec.id,
      name = spec.fields.name,
      trails = spec.fields.trails,
      hasTrail = (trail) => trails.find((el) => trail.id.equals(el.id)) === undefined;
  return Object.freeze({
    id,
    name,
    trails,
    hasTrail,
  });
}

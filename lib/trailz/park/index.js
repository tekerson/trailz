/* @flow */

import type { Id } from "./id";
import type { Fields, Trails } from "./fields";

import type { Name } from "./name";

export type Park = {
  id: Id,
  name: Name,
  trails: Trails,
}

type Spec = {
  id: Id,
  fields: Fields,
};

export default function park (spec: Spec): Park {
  return Object.freeze(
    Object.assign({}, { id: spec.id }, spec.fields)
  );
}

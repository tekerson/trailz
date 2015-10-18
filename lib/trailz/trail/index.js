/* @flow */

import type { Id } from "./id";
import type { Fields } from "./fields";

import type { Name } from "./name";
import type { Grade } from "./grade";
import type { Distance } from "./distance";

export type Trail = {
  id: Id,
  name: Name,
  distance: Distance,
  grade: Grade,
};

type Spec = {
  id: Id,
  fields: Fields,
};

export default function trail (spec: Spec): Trail {
  return Object.freeze(
    Object.assign({}, { id: spec.id }, spec.fields)
  );
}

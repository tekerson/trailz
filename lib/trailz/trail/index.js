/* @flow */

import type { Id } from "./id";
import type { Fields } from "./fields";

export type Trail = {
  id: Id,
  fields: Fields,
}

type Spec = {
  id: Id,
  fields: Fields,
};

export default function trail (spec: Spec): Trail {
  return Object.freeze(spec);
}

/* @flow */

import type { Id } from "./id";
import type { Fields } from "./fields";

export type Park = {
  id: Id,
  fields: Fields,
}

type Spec = {
  id: Id,
  fields: Fields,
};

export default function park (spec: Spec): Park {
  return Object.freeze(spec);
}

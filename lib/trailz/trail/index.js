/* @flow */

import * as Id from "./id";
import * as Fields from "./fields";
export { Id, Fields };

export type Type = {
  id: Id.Type,
  fields: Fields.Type
}

type Spec = {
  id: Id.Type,
  fields: Fields.Type,
};

export function trail (spec: Spec): Type {
  return Object.freeze(spec);
}

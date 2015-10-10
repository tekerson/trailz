/* @flow */

import * as Id from './id';
import * as Fields from './fields';
export { Id, Fields };

export type Type = Trail;

function Trail(id: Id.Type, fields: Fields.Type): Trail {
  this.id = id;
  this.fields = fields;
  return Object.freeze(this);
}

type Spec = {
  id: Id.Type,
  fields: Fields.Type,
};

export function trail (spec: Spec): Trail {
  let { id, fields } = spec;
  return new Trail(id, fields);
}

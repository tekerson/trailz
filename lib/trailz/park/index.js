/* @flow */

import * as Id from './id';
import * as Fields from './fields';
export { Id, Fields };

function Park(id: Id.Type, fields: Fields.Type): Park {
  this.id = id;
  this.fields = fields;
  return Object.freeze(this);
}

export type Type = Park;

export type Spec = {
  id: Id.Type,
  fields: Fields.Type,
};

export function park (spec: Spec): Park {
  let { id, fields } = spec;
  return new Park(id, fields);
}

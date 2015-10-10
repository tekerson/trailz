/* @flow */

import { Park } from 'trailz';
import { fromJson as mapTrail, Json as TrailJson } from './trail';

export type Json = {
  id : string,
  name : string,
  trails: Array<TrailJson>,
};

export function fromJson(json: Json): Park.Type {
  return Park.park({
    id: Park.Id.id(json.id),
    fields: {
      name: Park.Fields.Name.name(json.name),
      trails: json.trails.map(mapTrail)
    },
  });
}

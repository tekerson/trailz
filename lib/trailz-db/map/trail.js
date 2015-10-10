/* @flow */

import { Trail } from 'trailz';

export type Json = {
  id : string,
  name : string,
  distance : [number, string],
  grade: number,
};

export function fromJson(json: Json): Trail.Type {
  return Trail.trail({
    id: Trail.Id.id(json.id),
    fields: {
      name: Trail.Fields.Name.name(json.name),
      grade: Trail.Fields.Grade.grade(json.grade),
      distance: Trail.Fields.Distance.distance(json.distance),
    }
  });
}

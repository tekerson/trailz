/* @flow */

import { Trail } from '../../trailz';
import type { Result } from '.';
import { success, fail } from '.';

export type Json = {
  id : string,
  name : string,
  distance : [number, string],
  grade: number,
};

export function fromJson(json: Json): Result<Trail.Type> {
  let grade = Trail.Fields.Grade.grade(json.grade),
      distance = Trail.Fields.Distance.distance(json.distance);
  if (grade instanceof Trail.Fields.Grade.GradeError) {
    return fail(grade);
  }
  if (distance instanceof Trail.Fields.Distance.DistanceError) {
    return fail(distance);
  }
  return success(Trail.trail({
    id: Trail.Id.id(json.id),
    fields: Trail.Fields.fields({
      name: Trail.Fields.Name.name(json.name),
      grade,
      distance,
    })
  }));
}

export function toJson(trail: Trail.Type): Json {
  return {
    id: trail.id.toString(),
    name: trail.fields.name.toString(),
    grade: trail.fields.grade.value,
    distance: [trail.fields.distance.value, trail.fields.distance.unit],
  };
}

/* @flow */

import type { Result } from ".";
import type { Trail } from "../../trailz/trail";

import trail from "../../trailz/trail";
import id from "../../trailz/trail/id";
import fields, * as Fields from "../../trailz/trail/fields";

import { success, fail } from ".";

export type Json = {
  id : string,
  name : string,
  distance : [number, string],
  grade: number,
};

export function fromJson(json: Json): Result<Trail> {
  let grade = Fields.grade(json.grade),
      distance = Fields.distance(json.distance);
  if (grade instanceof Error) {
    return fail(grade);
  }
  if (distance instanceof Error) {
    return fail(distance);
  }
  return success(trail({
    id: id(json.id),
    fields: fields({
      name: Fields.name(json.name),
      grade,
      distance,
    }),
  }));
}

export function toJson(trail: Trail): Json {
  return {
    id: trail.id.toString(),
    name: trail.fields.name.toString(),
    grade: trail.fields.grade.valueOf(),
    distance: [trail.fields.distance.value, trail.fields.distance.unit],
  };
}

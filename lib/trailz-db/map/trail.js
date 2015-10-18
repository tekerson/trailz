/* @flow */

import type { Trail } from "trailz/trail";

import trail from "trailz/trail";
import id from "trailz/trail/id";
import fields, * as Fields from "trailz/trail/fields";
import type { Grade } from "trailz/trail/grade";
import type { Distance } from "trailz/trail/distance";


import { success, fail } from ".";

export type Json = {
  id : string,
  name : string,
  distance : [number, string],
  grade: number,
};

export function fromJson(json: Json): Promise<Trail> {
  return Promise.all([
    Fields.grade(json.grade),
    Fields.distance(json.distance),
  ]).then(([grade, distance]: [Grade, Distance]) => {
    return trail({
      id: id(json.id),
      fields: fields({
        name: Fields.name(json.name),
        grade,
        distance,
      }),
    });
  });
}

export function toJson(trail: Trail): Json {
  return {
    id: trail.id.toString(),
    name: trail.fields.name.toString(),
    grade: trail.fields.grade.value,
    distance: [trail.fields.distance.value, trail.fields.distance.unit],
  };
}

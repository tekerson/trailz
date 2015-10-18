/* @flow */

import type { Trail } from "trailz/trail";
import type { Name } from "trailz/trail/name";
import type { Grade } from "trailz/trail/grade";
import type { Distance } from "trailz/trail/distance";

import trail from "trailz/trail";
import id from "trailz/trail/id";
import fields, * as Fields from "trailz/trail/fields";

export type Json = {
  id : string,
  name : string,
  distance : [number, string],
  grade: number,
};

export function fromJson(json: Json): Promise<Trail> {
  return Promise.all([
    Fields.name(json.name),
    Fields.grade(json.grade),
    Fields.distance(json.distance),
  ]).then(([name, grade, distance]: [Name, Grade, Distance]) => trail({
    id: id(json.id),
    fields: fields({
      name,
      grade,
      distance,
    }),
  }));
}

export function toJson(trail: Trail): Json {
  return {
    id: trail.id.toString(),
    name: trail.fields.name.toString(),
    grade: trail.fields.grade.value,
    distance: [trail.fields.distance.value, trail.fields.distance.unit],
  };
}

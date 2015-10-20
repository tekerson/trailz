/* @flow */

import type { Trail } from "trailz/trail";
import type { Id } from "trailz/trail/id";
import type { Name } from "trailz/trail/name";
import type { Grade } from "trailz/trail/grade";
import type { Distance } from "trailz/trail/distance";

import trail from "trailz/trail";
import mkId from "trailz/trail/id";
import mkFields, * as Fields from "trailz/trail/fields";

export type Json = {
  id : string,
  name : string,
  distance : [number, string],
  grade: number,
};

export function fromJson(json: Json): Promise<Trail> {
  return Promise.all([
    mkId(json.id),
    Fields.name(json.name),
    Fields.grade(json.grade),
    Fields.distance(json.distance),
  ]).then(([id, name, grade, distance]: [Id, Name, Grade, Distance]) => trail({
    id,
    fields: mkFields({
      name,
      grade,
      distance,
    }),
  }));
}

export function toJson(trail: Trail): Json {
  return {
    id: trail.id.toString(),
    name: trail.name.toString(),
    grade: trail.grade.valueOf(),
    distance: [trail.distance.valueOf(), trail.distance.unitOf()],
  };
}

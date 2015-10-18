/* @flow */

import type { Park } from "trailz/park";

import park from "trailz/park";
import id from "trailz/park/id";
import { Name } from "trailz/park/name";
import fields, * as Fields from "trailz/park/fields";

import
  { fromJson as trailsFromJson,
    Json as TrailsJson,
  } from "./trails";
import
  { toJson as trailToJson,
  } from "./trail";

export type Json = {
  id : string,
  name : string,
  trails: TrailsJson,
};

export function fromJson(json: Json): Promise<Park> {
  return Promise.all([
    trailsFromJson(json.trails),
    Fields.name(json.name),
  ]).then(([trails, name]: [Fields.Trails, Name]) => park({
    id: id(json.id),
    fields: fields({
      name,
      trails: trails,
    }),
  }));
}

export function toJson(park: Park): Json {
  return {
    id: park.id.toString(),
    name: park.fields.name.toString(),
    trails: park.fields.trails.map(trailToJson),
  };
}

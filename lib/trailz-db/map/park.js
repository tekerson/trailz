/* @flow */

import type { Park } from "trailz/park";

import type { Id } from "trailz/park/id";
import type { Name } from "trailz/park/name";

import park from "trailz/park";
import mkId from "trailz/park/id";
import mkFields, * as Fields from "trailz/park/fields";

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
    mkId(json.id),
    trailsFromJson(json.trails),
    Fields.name(json.name),
  ]).then(([id, trails, name]: [Id, Fields.Trails, Name]) => park({
    id,
    fields: mkFields({
      name,
      trails: trails,
    }),
  }));
}

export function toJson(park: Park): Json {
  return {
    id: park.id.toString(),
    name: park.name.toString(),
    trails: park.trails.map(trailToJson),
  };
}

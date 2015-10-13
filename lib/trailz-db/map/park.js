/* @flow */

import type { Park } from "../../trailz/park";

import park from "../../trailz/park";
import id from "../../trailz/park/id";
import fields, * as Fields from "../../trailz/park/fields";

import
  { fromJson as trailsFromJson,
    Json as TrailsJson,
  } from "./trails";
import
  { toJson as trailToJson,
  } from "./trail";

import type { Result } from ".";
import { success, fail } from ".";

export type Json = {
  id : string,
  name : string,
  trails: TrailsJson,
};

export function fromJson(json: Json): Result<Park> {
  return trailsFromJson(json.trails).bind((trails) => {
    let name = Fields.name(json.name);
    if (name instanceof Error) {
      return fail(name);
    }
    return success(park({
      id: id(json.id),
      fields: fields({
        name,
        trails: trails,
      }),
    }));
  });
}

export function toJson(park: Park): Json {
  return {
    id: park.id.toString(),
    name: park.fields.name.toString(),
    trails: park.fields.trails.map(trailToJson),
  };
}

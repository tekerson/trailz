/* @flow */

import { Park } from "../../trailz";
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

export function fromJson(json: Json): Result<Park.Type> {
  return trailsFromJson(json.trails).bind((trails) => {
    let name = Park.Fields.Name.name(json.name);
    if (name instanceof Park.Fields.Name.NameError) {
      return fail(name);
    }
    return success(Park.park({
      id: Park.Id.id(json.id),
      fields: Park.Fields.fields({
        name,
        trails: trails,
      }),
    }));
  });
}

export function toJson(park: Park.Type): Json {
  return {
    id: park.id.toString(),
    name: park.fields.name.toString(),
    trails: park.fields.trails.map(trailToJson),
  };
}

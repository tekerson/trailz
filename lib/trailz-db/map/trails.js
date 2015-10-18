/* @flow */

import { Trails } from "trailz/park/fields";

import {
  fromJson as trailFromJson,
  toJson as trailToJson,
  Json as TrailJson,
} from "./trail";

export type Json = Array<TrailJson>;

export function fromJson(json: Json): Promise<Trails> {
  return Promise.all(json.map(trailFromJson));
}

export function toJson(trails: Trails): Json {
  return trails.map(trailToJson);
}

/* @flow */

import { Trails } from "trailz/park/fields";

import {
  fromJson as trailFromJson,
  toJson as trailToJson,
  Json as TrailJson,
} from "./trail";

import { Result, sequence } from ".";

export type Json = Array<TrailJson>;

export function fromJson(json: Json): Result<Trails> {
  return sequence(json.map(trailFromJson));
}

export function toJson(trails: Trails): Json {
  return trails.map(trailToJson);
}

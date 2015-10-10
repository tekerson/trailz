/* @flow */

import { Park } from '../../trailz';
import {
  fromJson as trailFromJson,
  toJson as trailToJson,
  Json as TrailJson,
} from './trail';
import { Result, sequence } from '.';

export type Json = Array<TrailJson>;

export function fromJson(json: Json): Result<Park.Fields.Trails> {
  return sequence(json.map(trailFromJson));
}

export function toJson(trails: Park.Fields.Trails): Json {
  return trails.map(trailToJson);
}

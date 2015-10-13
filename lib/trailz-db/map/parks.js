/* @flow */

import { Parks } from "trailz";
import { fromJson as parkFromJson, Json as ParkJson } from "./park";

export type Json = Array<ParkJson>;

export function fromJson(json: Json): Parks {
  return json.map(parkFromJson)
    .filter(result => result.success === 1)
    .map(result => result.result);
}

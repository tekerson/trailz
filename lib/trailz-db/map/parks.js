/* @flow */

import { Parks } from "trailz";
import { fromJson as parkFromJson, Json as ParkJson } from "./park";

export type Json = Array<ParkJson>;

export function fromJson(json: Json): Promise<Parks> {
  return Promise.all(json.map(parkFromJson));
}

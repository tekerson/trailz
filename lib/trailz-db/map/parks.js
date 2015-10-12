/* @flow */

import { Parks } from "../../trailz";
import { fromJson as parkFromJson, Json as ParkJson } from "./park";

export type Json = Array<ParkJson>;

export function fromJson(json: Json): Parks {
  var parks = [];
  json.map(parkFromJson)
    .forEach((el) => {
      if (el.success === 1) {
        parks.push(el.result);
      }
    });
  return parks;
}

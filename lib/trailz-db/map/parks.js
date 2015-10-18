/* @flow */

import { Parks } from "trailz";
import { fromJson as parkFromJson, Json as ParkJson } from "./park";

import type { Park } from "trailz/park";
import type { Result } from ".";

export type Json = Array<ParkJson>;

export function fromJson(json: Json): Parks {
  return json.map(parkFromJson)
    .filter(result => result.success === 1)
    .map(result => {
      // Needed to make flow happy, even though it is already filtered :(
      if (result.success === 1) {
        return result.result;
      } else {
        throw Error();
      }
    });
}

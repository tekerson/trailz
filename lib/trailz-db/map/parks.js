/* @flow */

import { Parks } from 'trailz';
import { fromJson as mapPark, Json as ParkJson } from './park';

export type Json = Array<ParkJson>;

export function fromJson(json: Json): Parks {
  return json.map(mapPark);
}

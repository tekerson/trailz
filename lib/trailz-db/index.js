/* @flow */

import { Parks } from 'trailz';
import { fromJson as mapParks } from './map/parks';

export function listParks(): Promise<Parks> {
  return Promise
    .resolve(parksJson)
    .then(mapParks);
};

const parksJson = [{
  id : "PARK-1",
  name : "Premier Park",
  trails : [
  {
    id : "TRAIL-1-1",
    name : "Trail 1-1",
    distance : [5, 'km'],
    grade: 4
  },
  {
    id : "TRAIL-1-2",
    name : "Trail 1-2",
    distance : [800, 'm'],
    grade: 2
  },
  ],
}];

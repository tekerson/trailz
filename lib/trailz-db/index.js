/* @flow */

import { Parks } from "trailz";
import { parksFromJson } from "./map";

export function list(): Promise<Parks> {
  return Promise
    .resolve(db)
    .then(parksFromJson);
}

var db = [{
  id : "PARK-1",
  name : "Premier Park",
  trails : [
      {
        id : "TRAIL-1-1",
        name : "Trail 1-1",
        distance : [5, "km"],
        grade: 4,
      },
      {
        id : "TRAIL-1-2",
        name : "Trail 1-2",
        distance : [800, "m"],
        grade: 2,
      },
  ],
}, {
  id : "PARK-2",
  name : "Secondary Park",
  trails : [
      {
        id : "TRAIL-2-1",
        name : "Trail 2-1",
        distance : [1600, "m"],
        grade: 2,
      },
      {
        id : "TRAIL-2-2",
        name : "Trail 2-2",
        distance : [8.2, "km"],
        grade: 5,
      },
  ],
}];

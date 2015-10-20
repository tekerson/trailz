/* @flow */

import { parksFromJson } from "./map";

import type { Parks } from "trailz";
import type { Trails } from "trailz/park/fields";
import type { Trail } from "trailz/trail";


export function listParks(): Promise<Parks> {
  return Promise
    .resolve(db)
    .then(parksFromJson);
}

export function toggleSelectedTrail(trail: Trail): Promise<Trails> {
  let index = selected.map(s => s.id.valueOf()).indexOf(trail.id.valueOf());
  if (index !== -1) {
    selected.splice(index, 1);
  } else {
    selected.push(trail);
  }
  return Promise.resolve(selected);
}

export function listSelectedTrails(): Promise<Trails> {
  return Promise.resolve(selected);
}

var selected: Trails = [];

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

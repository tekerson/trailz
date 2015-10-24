/* @flow */

import type { Park } from "./park";
import type { Trails } from "./park/fields";
import type { Trail } from "./trail";
import type { Distance } from "./trail/distance";

import { sum, kilometres } from "./trail/distance";

export type Parks = Array<Park>;

export type ParkRepo = {
  listParks: () => Promise<Parks>,
  listSelectedTrails: () => Promise<Trails>,
  toggleSelectedTrail: (trail: Trail) => Promise<void>,
};

export function listParks(repo: ParkRepo): Promise<Parks> {
  return repo.listParks();
}

export function toggleTrail(repo: ParkRepo, trail: Trail): Promise<void> {
  return Promise.all([repo.listParks(), repo.listSelectedTrails()])
    .then(([parks, trails]: [Parks, Trails]) => new Promise((resolve, reject) => {

      // No reason to reject the first selection
      if (trails.length === 0) {
        return resolve();
      }

      // No rules against removing a trail
      if (trails.find((el) => el === trail) !== undefined) {
        return resolve();
      }

      // A trail must belong to a park
      let park = parks.find((park: Park) => park.hasTrail(trail));
      if (park === undefined) {
        return reject("No associated park for trail");
      }

      // Multiple trails must be from the same park
      let currentPark = parks.find((park: Park) => park.hasTrail(trails[0]));
      if (!currentPark.hasTrail(trail)) {
        return reject("Cross-park selection");
      }

      // Total distance of trails with the new one can't exceed 5km
      let totalDistance =
        sum(trails.map(trail => trail.distance))
        .add(trail.distance);
      if (totalDistance.greaterThan(kilometres(5))) {
        return reject("Too far!");
      }

      return resolve();
    }))
    .then(() => repo.toggleSelectedTrail(trail));
}

/* @flow */

import type { Park } from "./park";
import type { Trails } from "./park/fields";
import type { Trail } from "./trail";

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
  return Promise.all([listParks(repo), repo.listSelectedTrails()])
    .then(([parks, trails]: [Parks, Trails]) => {
      let currentPark = (trails.length > 0)
        ? parks.find((park: Park) => park.hasTrail(trails[0]))
        : undefined;

      let park = parks.find((park: Park) => park.hasTrail(trail));
      if (park === undefined) {
        return Promise.reject("No associated park for trail");
      }

      if (currentPark !== undefined && !currentPark.hasTrail(trail)) {
        return Promise.reject("Cross-park selection");
      }
      return Promise.resolve();
    })
    .then(() => repo.toggleSelectedTrail(trail));
}

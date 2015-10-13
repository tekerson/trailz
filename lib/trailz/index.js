/* @flow */

import type Park from "./park";

export type Parks = Array<Park>;

export type ParkRepo = {
  list: () => Promise<Parks>,
};

export function listParks(repo: ParkRepo): Promise<Parks> {
  return repo.list();
}

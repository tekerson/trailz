/* @flow */

import type Park from "./park";
import type Trail from "./trail";

export type Parks = Array<Park>;

export type ParkRepo = {
  list: () => Promise<Parks>,
};

export function listParks(repo: ParkRepo): Promise<Parks> {
  return repo.list();
}

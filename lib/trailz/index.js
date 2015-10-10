/* @flow */

import * as Park from './park';
import * as Trail from './trail';
export { Park, Trail };

export type ParkRepo = {
  listParks: () => Promise<Parks>
};

export type Parks = Array<Park.Type>;

export function listParks(repo: ParkRepo): Promise<Parks> {
  return repo.listParks();
}

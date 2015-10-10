/* @flow */

import * as Park from './park';
import * as Trail from './trail';
export { Park, Trail };
export type Parks = Array<Park.Type>;

export type ParkRepo = {
  list: () => Promise<Parks>,
  update: (id: Park.Id.Type, fields: Park.Fields.Type) => Promise<Park.Type>
};

export function listParks(repo: ParkRepo): Promise<Parks> {
  return repo.list();
}

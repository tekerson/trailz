import Reflux from 'reflux';

import ParkActions from '../actions/park-actions';

import * as Db from "trailz-db";
import { listParks } from "trailz";

export default Reflux.createStore({
  listenables: [ParkActions],
  parks: [],

  init: function () {
    this.onFetchList();
  },

  onFetchList: function () {
    listParks(Db).then((parks) => {
      this.parks = parks;
      this.trigger(this.parks);
    });
  },

});

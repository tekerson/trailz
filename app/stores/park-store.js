import Reflux from 'reflux';

import ParkActions from '../actions/park-actions';

import * as Db from "trailz-db";
import { listParks } from "trailz";

export default Reflux.createStore({
  listenables: [ParkActions],

  state: {
    list: [],
    selected: null,
  },

  init: function () {
    this.onFetchList();
  },

  onFetchList: function () {
    listParks(Db).then((parks) => {
      this.state.list = parks;
      this.trigger(this.state);
    });
  },

  onSelect: function (park) {
    this.state.selected = park === this.state.selected ? null : park;
    this.trigger(this.state);
  }

});

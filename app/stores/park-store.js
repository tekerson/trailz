import Reflux from "reflux";

import ParkActions from "../actions/park-actions";

import * as Db from "trailz-db";
import { listParks, toggleTrail } from "trailz";

export default Reflux.createStore({
  listenables: [ParkActions],

  state: {
    list: [],
    open: null,
    selected: [],
    errors: [],
  },

  init: function () {
    ParkActions.fetchList();
  },

  onFetchList: function () {
    listParks(Db)
      .then(ParkActions.fetchList.completed);
  },

  onFetchListCompleted: function (parks) {
    this.state.list = parks;
    this.trigger(this.state);
  },

  onFetchListFailed: function (err) {
    this.state.errors.push(err);
    this.trigger(this.state);
  },

  onTogglePark: function (park) {
    this.state.open = park === this.state.open ? null : park;
    this.trigger(this.state);
  },

  onToggleTrail: function (trail) {
    toggleTrail(Db, trail)
      .then(ParkActions.toggleTrail.completed)
      .catch(ParkActions.toggleTrail.failed);
  },

  onToggleTrailCompleted: function (selected) {
    this.state.errors.length = 0;
    this.state.selected = selected;
    this.trigger(this.state);
  },

  onToggleTrailFailed: function (err) {
    this.state.errors.push(err);
    this.trigger(this.state);
  },

});

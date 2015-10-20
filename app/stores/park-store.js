import Reflux from "reflux";

import UserActions from "../actions/user-actions";
import SystemActions from "../actions/system-actions";

import * as Db from "trailz-db";
import { listParks } from "trailz";

export default Reflux.createStore({
  listenables: [UserActions, SystemActions],

  state: {
    list: [],
    errors: [],
  },

  init: function () {
    SystemActions.fetchList();
  },

  onFetchList: function () {
    listParks(Db)
      .then(UserActions.fetchList.completed);
  },

  onFetchListCompleted: function (parks) {
    this.state.list = parks;
    this.trigger(this.state);
  },

  onFetchListFailed: function (err) {
    this.state.errors.push(err);
    this.trigger(this.state);
  },

});

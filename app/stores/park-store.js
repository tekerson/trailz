import Reflux from "reflux";

import UserActions from "../actions/user-actions";

import * as Db from "trailz-db";
import { listParks } from "trailz";

export default Reflux.createStore({
  listenables: [UserActions],

  errors: [],

  init: function () {
    this.onFetchList();
  },

  onFetchList: function () {
    listParks(Db)
      .then(UserActions.fetchList.completed)
      .catch(UserActions.fetchList.failed);
  },

  onFetchListCompleted: function (parks) {
    this.errors = [];
    this.trigger({
      list: parks,
      errors: this.errors,
    });
  },

  onFetchListFailed: function (err) {
    this.errors = this.error.concat([err]);
    this.trigger({
      errors: this.errors,
    });
  },

});

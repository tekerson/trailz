import Reflux from "reflux";

import UserActions from "../actions/user-actions";

import * as Db from "trailz-db";
import { toggleTrail } from "trailz";

export default Reflux.createStore({
  listenables: [UserActions],

  errors: [],

  onToggleTrail: function (trail) {
    toggleTrail(Db, trail)
      .then(UserActions.toggleTrail.completed)
      .catch(UserActions.toggleTrail.failed);
  },

  onToggleTrailCompleted: function (selected) {
    this.errors = [];
    this.trigger({
      selected,
      errors: this.errors,
    });
  },

  onToggleTrailFailed: function (err) {
    this.errors = this.errors.concat([err]);
    this.trigger({
      errors: this.errors,
    });
  },

});

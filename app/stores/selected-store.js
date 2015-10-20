import Reflux from "reflux";

import UserActions from "../actions/user-actions";

import * as Db from "trailz-db";
import { toggleTrail } from "trailz";

export default Reflux.createStore({
  listenables: [UserActions],

  state: {
    selected: [],
    errors: [],
  },

  onToggleTrail: function (trail) {
    toggleTrail(Db, trail)
      .then(UserActions.toggleTrail.completed)
      .catch(UserActions.toggleTrail.failed);
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

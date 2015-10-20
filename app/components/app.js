import React from "react";
import Reflux from "reflux";

import ParkStore from "../stores/park-store";

import Errors from "./errors";

import ParkList from "./park/list";
import TrailList from "./trail/list";

export default React.createClass({
  mixins: [Reflux.connect(ParkStore)],
  getInitialState: function () {
    return {
      list: [],
      selected: [],
      errors: [],
    };
  },
  render: function () {
    let { list, selected, errors } = this.state;
    return (
      <div className="trailz-app">
        <Errors errors={errors} />
        <ParkList parks={list} />
        <ul className="selected">
          <li><h2>Selected Trails</h2>
            <TrailList trails={selected} />
          </li>
        </ul>
      </div>
    );
  },
});

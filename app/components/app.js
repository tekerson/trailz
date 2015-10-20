import React from "react";
import Reflux from "reflux";

import ParkStore from "../stores/park-store";
import SelectedStore from "../stores/selected-store";

import Errors from "./errors";

import ParkList from "./park/list";
import SelectedList from "./selected/list";

export default React.createClass({
  mixins: [Reflux.connect(ParkStore), Reflux.connect(SelectedStore)],
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
        <SelectedList trails={selected} />
      </div>
    );
  },
});

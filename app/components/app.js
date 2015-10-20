import React from "react";
import Reflux from "reflux";

import ParkStore from "../stores/park-store";

import ParkInfo from "./park-info";
import ParkListHeading from "./park-list-heading";

import Errors from "./errors";

import TrailList from "./trail/list";

export default React.createClass({
  mixins: [Reflux.connect(ParkStore)],
  getInitialState: function () {
    return {
      list: [],
      open: null,
      selected: [],
      errors: [],
    };
  },
  render: function () {
    let { list, selected, open, errors } = this.state;
    return (
      <div>
        <Errors errors={errors} />
        <ul className="trailz-app">
          {list.map((park) =>
            <li key={park.id.toString()}>
              {(park === open)
                ? <ParkInfo park={park} />
                : <ParkListHeading park={park} />
              }
            </li>
          )}
          <li><h2>Selected Trails</h2>
            <TrailList trails={selected} />
          </li>
        </ul>
      </div>
    );
  },
});

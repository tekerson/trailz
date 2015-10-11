import React from "react";
import Reflux from "reflux";

import ParkStore from "../stores/park-store";

import ParkInfo from "./park-info";
import ParkListHeading from "./park-list-heading";

export default React.createClass({
  mixins: [Reflux.connect(ParkStore)],
  getInitialState: function () {
    return { list: [], selected: null };
  },
  render: function () {
    let { list, selected } = this.state;
    return (
      <ul className="trailz-app">
        {list.map((park) =>
          <li key={park.id.toString()}>
            {(park === selected)
              ? <ParkInfo park={park} />
              : <ParkListHeading park={park} />
            }
          </li>
        )}
      </ul>
    );
  },
});

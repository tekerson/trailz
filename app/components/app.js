import React from "react";
import Reflux from "reflux";

import ParkStore from "../stores/park-store";

import ParkInfo from "./park-info";

export default React.createClass({
  mixins: [Reflux.connect(ParkStore, 'parks')],
  getInitialState: function () {
    return { parks: [] };
  },
  render: function () {
    let parks = this.state.parks;
    return (
      <div className="park-list">
        {parks.map((park) =>
          <ParkInfo key={park.id.toString()} park={park} />
        )}
      </div>
    );
  },
});

import React from "react";

import TrailList from "./trail/list";
import ParkListHeading from "./park-list-heading";

export default React.createClass({
  render: function () {
    let park = this.props.park;
    return (
      <div className="park-info">
        <ParkListHeading park={park} />
        <TrailList trails={park.fields.trails} />
      </div>
    );
  },
});

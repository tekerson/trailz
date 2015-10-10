import React from "react";

import ParkInfo from "./park-info";

export default React.createClass({
  render: function () {
    let parks = this.props.parks;
    return (
      <div className="park-list">
        {parks.map((park) =>
          <ParkInfo key={park.id.toString()} park={park} />
        )}
      </div>
    );
  },
});

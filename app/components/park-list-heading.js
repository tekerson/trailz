import React from "react";

import ParkActions from "../actions/park-actions";

export default React.createClass({
  select: function () {
    ParkActions.select(this.props.park);
  },
  render: function () {
    let park = this.props.park;
    return (
      <h1 onClick={this.select}>
        {park.name.toString()}
      </h1>
    );
  },
});

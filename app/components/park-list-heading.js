import React from "react";

import ParkActions from "../actions/park-actions";

export default React.createClass({
  toggle: function () {
    ParkActions.togglePark(this.props.park);
  },
  render: function () {
    let park = this.props.park;
    return (
      <h2 onClick={this.toggle}>
        {park.name.toString()}
      </h2>
    );
  },
});

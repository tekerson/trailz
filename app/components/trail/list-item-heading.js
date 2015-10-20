import React from "react";

import ParkActions from "../../actions/park-actions";

export default React.createClass({
  select: function () {
    ParkActions.toggleTrail(this.props.trail);
  },
  render: function () {
    let trail = this.props.trail;
    return (
      <h3 onClick={this.select}>
        {trail.name.toString()}
      </h3>
    );
  },
});

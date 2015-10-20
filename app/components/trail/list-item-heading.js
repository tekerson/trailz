import React from "react";

import UserActions from "../../actions/user-actions";

export default React.createClass({
  select: function () {
    UserActions.toggleTrail(this.props.trail);
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

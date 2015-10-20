import React from "react";

import ListItemHeading from "./list-item-heading";

export default React.createClass({
  render: function () {
    let trail = this.props.trail;
    return (
      <li className="trail-list-item">
        <ListItemHeading trail={trail} />
        <dl>
          <dt>Distance</dt>
          <dd>{trail.distance.toString()}</dd>

          <dt>Grade</dt>
          <dd>{trail.grade.toString()}</dd>
        </dl>
      </li>
    );
  },
});

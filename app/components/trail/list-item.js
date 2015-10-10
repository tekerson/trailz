import React from "react";

export default React.createClass({
  render: function () {
    let trail = this.props.trail;
    return (
      <div className="trail-list-item">
        <h2>{trail.fields.name.toString()}</h2>
        <span>Distance: {trail.fields.distance.toString()}</span>
      </div>
    );
  },
});

import React from "react";

export default React.createClass({
  render: function () {
    let trail = this.props.trail;
    return (
      <div className="trail-list-item">
        <h2>{trail.fields.name.toString()}</h2>
        <dl>
          <dt>Distance</dt>
          <dd>{trail.fields.distance.toString()}</dd>

          <dt>Grade</dt>
          <dd>{trail.fields.grade.toString()}</dd>
        </dl>
      </div>
    );
  },
});

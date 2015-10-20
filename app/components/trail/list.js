import React from "react";

import TrailListItem from "./list-item";

export default React.createClass({
  render: function () {
    let trails = this.props.trails;
    return (
      <ul className="trail-list">
        {trails.map((trail) =>
          <TrailListItem key={trail.id.toString()} trail={trail} />
        )}
      </ul>
    );
  },
});

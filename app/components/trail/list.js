import React from "react";

import TrailListItem from "./list-item";

export default React.createClass({
  render: function () {
    let trails = this.props.trails;
    return (
      <div className="trail-list">
        {trails.map((trail) =>
          <TrailListItem key={trail.id.toString()} trail={trail} />
        )}
      </div>
    );
  },
});

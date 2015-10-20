import React from "react";

import TrailList from "../trail/list";

export default React.createClass({
  render: function () {
    let trails = this.props.trails;
    return (
      <ul className="selected-list">
        <li>
          <h2>Selected Trails</h2>
          <TrailList trails={trails} />
        </li>
      </ul>
    );
  },
});

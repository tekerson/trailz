import React from "react";

import TrailList from "./trail/list";

export default React.createClass({
  render: function () {
    let park = this.props.park;
    return (
      <div className="park-info">
        <h1>{park.fields.name.toString()}</h1>
        <TrailList trails={park.fields.trails} />
      </div>
    );
  },
});

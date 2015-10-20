import React from "react";

import ListItemHeading from "./list-item-heading";
import TrailList from "../trail/list";

export default React.createClass({
  render: function () {
    let { park, open } = this.props;
    return (
      <li className="park-list-item">
        <ListItemHeading park={park} onClick={this.props.select} />
        {open ? <TrailList trails={park.trails} /> : null}
      </li>
    );
  },
});

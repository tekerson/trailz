import React from "react";

export default React.createClass({
  render: function () {
    let park = this.props.park;
    return (
      <h2 onClick={this.props.onClick}>
        {park.name.toString()}
      </h2>
    );
  },
});

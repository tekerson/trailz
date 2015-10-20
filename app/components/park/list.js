import React from "react";

import ListItem from "./list-item";

export default React.createClass({
  getInitialState: function () {
    return {
      open: null,
    };
  },
  selectPark: function (park) {
    this.setState({
      open: (park === this.state.open) ? null : park,
    });
  },
  render: function () {
    let { open } = this.state;
    let { parks } = this.props;
    return (
      <ul className="park-list">
        {parks.map((park) =>
            <ListItem park={park}
                      open={open === park}
                      select={() => this.selectPark(park)}
                      key={park.id.valueOf()}
                      />)}
      </ul>
    );
  },
});

import React from "react";

export default React.createClass({
  render: function () {
    let errors = this.props.errors;
    return (
      <ul className="errors">
        {(errors.length > 0)
          ? errors.map((err, i) => (
              <li key={i} className="error">Error: {err}</li>
            ))
          : null}
      </ul>
    );
  },
});


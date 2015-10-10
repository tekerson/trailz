import 'babel-core/polyfill';

import React from "react";
import App from "./components/app";

import { listParks } from 'trailz-db';

listParks()
  .then((parks) => {
    React.render(
      <App parks={parks} />,
      document.body
    );
  });

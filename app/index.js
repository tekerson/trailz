import 'babel-core/polyfill';

import React from "react";
import App from "./components/app";

import * as Db from 'trailz-db';
import { listParks } from 'trailz';

listParks(Db)
  .then((parks) => {
    React.render(
      <App parks={parks} />,
      document.body
    );
  });

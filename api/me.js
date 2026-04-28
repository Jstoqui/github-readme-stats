// @ts-check

import statsHandler from "./index.js";

const DEFAULTS = {
  include_all_commits: "true",
  show_icons: "true",
  theme: "transparent",
  hide_border: "true",
};

const FORCED = {
  username: "Jstoqui",
};

// @ts-ignore
export default async (req, res) => {
  req.query = {
    ...DEFAULTS,
    ...req.query,
    ...FORCED,
  };
  return statsHandler(req, res);
};

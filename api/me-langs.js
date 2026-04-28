// @ts-check

import topLangsHandler from "./top-langs.js";

const DEFAULTS = {
  layout: "compact",
  langs_count: "8",
  exclude_repo:
    "Jstoqui,github-readme-stats,test-gbt,gbt-data-dbt,test,MobiliData_DS4A_TEAM80,DS4A,DA_COURSE,Modelos_Programacion_2,Proyecto_Estadistica,Prueba,Two_Wheels,hello-world,dotfiles",
  hide: "jupyter notebook,html",
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
  return topLangsHandler(req, res);
};

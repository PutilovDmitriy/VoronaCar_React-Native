import { Model } from "./../types/Model";
import { Problem, ProblemKey } from "../types/Car";

//urls http

export const urlUser = "https://pacific-cliffs-72324.herokuapp.com/auth/login";
export const urlCar = "https://pacific-cliffs-72324.herokuapp.com/car";
export const urlVorona =
  "https://pacific-cliffs-72324.herokuapp.com/car/vorona";
export const urlShift = "https://pacific-cliffs-72324.herokuapp.com/shift";

/// color
export const colorGreen = "#4CD964";
export const colorBlack = "#262626";
export const colorGrey = "#DADADA";
export const colorDarkGreen = "#00C781";
export const colorPurple = "#7D4CDB";
export const colorRed = "#FF4040";
///dateformat
export const dateFormat = require("dateformat");

//urls

export const urlsLogo = (key: Model) => {
  switch (key) {
    case "R":
      return require("../../public/img/renault.png");
    case "W":
      return require("../../public/img/volkswagen.png");
    case "K":
      return require("../../public/img/kia.png");
    default:
      return require("../../public/img/FreeCar.png");
  }
};
export const urlsProblem = (key: ProblemKey) => {
  switch (key) {
    case "D":
      return require("../../public/img/documents.png");
    case "A":
      return require("../../public/img/doctor.png");
    case "F":
      return require("../../public/img/fire.png");
    case "WT":
      return require("../../public/img/warning.png");
    case "C":
      return require("../../public/img/coolant.png");
    case "M":
      return require("../../public/img/maslo.png");
    case "EB":
      return require("../../public/img/accum.png");
    case "J":
      return require("../../public/img/j.png");
    default:
      break;
  }
};

export const problemsItem: Problem[] = [
  { id: "D", name: "Документы" },
  { id: "A", name: "Аптечка" },
  { id: "F", name: "Огнетушитель" },
  { id: "WT", name: "Аварийный знак" },
  { id: "C", name: "Тосол" },
  { id: "M", name: "Масло" },
  { id: "EB", name: "Аккумулятор" },
  { id: "J", name: "Дворники" },
];

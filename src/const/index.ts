import { Model } from "./../types/Model";

//urls http
const baseUrl = 'https://pacific-cliffs-72324.herokuapp.com';
export const urlUser = `${baseUrl}/auth/login`;
export const urlCar = `${baseUrl}/car`;
export const urlVorona = `${baseUrl}/car/vorona`;
export const urlShift = `${baseUrl}/shift`;
export const urlServiceRecords = `${baseUrl}/service-record`;

/// color
export const colorGreen = "#27AE60";
export const colorGreenPressed = "#219653";
export const colorBlack = "#262626";
export const colorGrey = "#DADADA";
export const colorDarkGrey = "#E0E0E0"
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

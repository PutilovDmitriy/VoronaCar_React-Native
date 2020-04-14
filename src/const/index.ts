export const urlUser = "https://glacial-ridge-38472.herokuapp.com/user/";
export const urlCar = "https://glacial-ridge-38472.herokuapp.com/car/";
export const colorGren = "#4ed963"; // нежно зеленый
export const dateFormat = require("dateformat");
export const urlsLogo = (key: string) => {
  switch (key) {
    case "R":
      return require("../../public/img/renault.png");
    case "W":
      return require("../../public/img/kia.png");
    case "K":
      return require("../../public/img/volkswagen.png");
    default:
      return require("../../public/img/FreeCar.png");
  }
};
export const urlsProblem = (key: string) => {
  switch (key) {
    case "D":
      return require("../../public/img/documents.png");
    case "A":
      return require("../../public/img/doctor.png");
    case "O":
      return require("../../public/img/fire.png");
    case "Z":
      return require("../../public/img/wheel.png");
    case "T":
      return require("../../public/img/coolant.png");
    default:
      break;
  }
};

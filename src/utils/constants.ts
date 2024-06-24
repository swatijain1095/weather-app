import Clear from "../assets/images/Clear.jpg";
import Fog from "../assets/images/fog.png";
import Cloudy from "../assets/images/Cloudy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snow from "../assets/images/snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Sunny from "../assets/images/Sunny.jpg";

import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";

export const WeatherImageMap = {
  clear: Clear,
  cloud: Cloudy,
  rain: Rainy,
  shower: Rainy,
  snow: Snow,
  fog: Fog,
  thunder: Stormy,
  storm: Stormy,
  sunny: Sunny,
};

export const WeatherIconMap = {
  cloud,
  rain,
  clear: sun,
  thunder: storm,
  fog,
  snow,
  wind,
};

import { useState, useEffect } from "react";
import { useDate } from "../../hooks/useDate";
import "../../index.css";
import sun from "../../assets/icons/sun.png";
import { WeatherIconMap } from "../../utils/constants";

interface WeatherCardProps {
  temperature: number;
  windspeed: number;
  humidity: number;
  place: string;
  heatIndex: number;
  conditions: string;
}

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  conditions,
}: WeatherCardProps) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (conditions) {
      const matchedIcon = Object.keys(WeatherIconMap).find((key) =>
        conditions.toLowerCase().includes(key)
      ) as keyof typeof WeatherIconMap;
      if (matchedIcon) {
        setIcon(WeatherIconMap[matchedIcon]);
      } else {
        setIcon(sun);
      }
    }
  }, [conditions]);

  return (
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex w-full justify-center items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather-icon" />
        <p className="font-bold text-5xl flex justify-center items-center">
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <div className="flex flex-col items-center justify-center flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          <p>Wind Speed</p> <p className="font-normal">{windspeed} km/h</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          <p>Humidity</p> <p className="font-normal">{humidity} gm/m&#179;</p>
        </div>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Heat Index</p>
        <p className="text-lg">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;

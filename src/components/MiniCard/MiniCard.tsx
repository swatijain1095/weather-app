import { useEffect, useState } from "react";
import sun from "../../assets/icons/sun.png";
import { WeatherIconMap } from "../../utils/constants";

interface MiniCardProps {
  time: string;
  temp: number;
  conditions: string;
}

const MiniCard = ({ time, temp, conditions }: MiniCardProps) => {
  const [icon, setIcon] = useState(sun);

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
    <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col">
      <p className="text-center">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1">
        <img
          src={icon}
          alt="forecast not available"
          className="w-[4rem] h-[4rem]"
        />
      </div>
      <p className="text-center font-bold">{temp}&deg;C</p>
    </div>
  );
};

export default MiniCard;

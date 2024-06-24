import { useEffect, useState } from "react";
import { WeatherImageMap } from "../../utils/constants";
import Clear from "../../assets/images/Clear.jpg";

type BackgroundLayoutProps = {
  conditions: string;
};

const BackgroundLayout = ({ conditions }: BackgroundLayoutProps) => {
  const [image, setImage] = useState<string>(Clear);

  useEffect(() => {
    if (conditions) {
      const matchedImage = Object.keys(WeatherImageMap).find((key) =>
        conditions.toLowerCase().includes(key)
      ) as keyof typeof WeatherImageMap;
      if (matchedImage) {
        setImage(WeatherImageMap[matchedImage]);
      } else {
        setImage(Clear); // Default image if no match is found
      }
    }
  }, [conditions]);

  return (
    <img
      src={image}
      alt="weather_image"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgroundLayout;

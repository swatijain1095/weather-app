import {
  useContext,
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

interface WeatherData {
  temp?: number;
  conditions?: string;
}

interface WeatherContextType {
  weather: WeatherData | object;
  setPlace: React.Dispatch<React.SetStateAction<string>>;
  values: any[];
  thisLocation: string;
  place: string;
}

interface WeatherContextProviderProps {
  children: ReactNode;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherContextProvider = ({
  children,
}: WeatherContextProviderProps) => {
  const [weather, setWeather] = useState<WeatherData | object>(Object);
  const [values, setValues] = useState<any[]>([]);
  const [place, setPlace] = useState<string>("Jaipur");
  const [thisLocation, setThisLocation] = useState<string>("");

  //fetch api
  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        contentType: "json",
        unitGroup: "metric",
        aggregateHours: "24",
        location: place,
        shortColumnNames: "0",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const thisData = Object.values(response.data.locations)[0] as any;
      setThisLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (e) {
      console.log(e);
      alert("This place doesnot exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log({ values });
  }, [values]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
        place,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = (): WeatherContextType =>
  useContext(WeatherContext);

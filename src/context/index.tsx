import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import axios from "axios";

interface WeatherData {
  temp: number;
  conditions: string;
  wspd: number;
  humidity: number;
  heatindex: number;
  datetime: string;
}

interface WeatherContextType {
  weather: WeatherData;
  setPlace: React.Dispatch<React.SetStateAction<string>>;
  values: WeatherData[];
  city: string;
  place: string;
}

interface WeatherApiResponse {
  address: string;
  values: WeatherData[];
}

interface WeatherContextProviderProps {
  children: ReactNode;
}

const initialContextState = {
  weather: {
    temp: 0,
    conditions: "",
    wspd: 0,
    humidity: 0,
    heatindex: 0,
    datetime: "",
  },
  setPlace: () => {},
  values: [],
  city: "",
  place: "",
};

export const WeatherContext =
  createContext<WeatherContextType>(initialContextState);

export const WeatherContextProvider = ({
  children,
}: WeatherContextProviderProps) => {
  const [weather, setWeather] = useState<WeatherData>(
    initialContextState.weather
  );
  const [values, setValues] = useState<WeatherData[]>([]);
  const [place, setPlace] = useState<string>("Indore");
  const [city, setCity] = useState<string>("");

  //fetch api
  const fetchWeather = useCallback(async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        contentType: "json",
        unitGroup: "metric",
        aggregateHours: "24",
        location: place,
        shortColumnNames: false,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const thisData = Object.values(
        response.data.locations
      )[0] as WeatherApiResponse;
      setCity(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (e) {
      console.log(e);
      alert("This place doesnot exist");
    }
  }, [place]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setPlace,
        values,
        city,
        place,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

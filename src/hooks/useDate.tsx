import { useEffect, useState } from "react";
import moment from "moment";

export const useDate = () => {
  const [todayDate, setTodayDate] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setTodayDate(moment());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const date = todayDate.format("ddd MMM DD YYYY");
  const time = todayDate.format("h:mm a");

  return {
    date,
    time,
  };
};

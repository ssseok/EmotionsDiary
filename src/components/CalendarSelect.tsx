import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { type DateType, type CalendarSelectProps } from "../interface/type";
import { daysOfWeek } from "./data/common";

export default function CalendarSelect({ dateChage }: CalendarSelectProps) {
  const handleChange = (value: any | null) => {
    const { $y: year, $M, $D: day, $W } = value;
    const month = $M + 1;
    const dayOfWeeks = daysOfWeek[$W];

    const totalText = `${year}년 ${month}월 ${day}일 ${dayOfWeeks}`;

    const resultDate: DateType = {
      year,
      month,
      day,
      dayOfWeeks,
      totalDate: `${year}-${month < 10 ? "0" : ""}${month}-${
        day < 10 ? "0" : ""
      }${day}`,
      totalText,
    };
    dateChage(resultDate);
  };
  return (
    <div className="bg-mood-purple rounded-3xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={handleChange} />
      </LocalizationProvider>
    </div>
  );
}

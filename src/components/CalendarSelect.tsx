import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
  type PickersDayProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { type DateType, type CalendarSelectProps } from "../interface/type";
import { daysOfWeek, totalDate } from "./data/common";
import dayjs, { type Dayjs } from "dayjs";

export default function CalendarSelect({
  dateChage,
  diaryList,
}: CalendarSelectProps) {
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
      totalDate: totalDate(year, month, day),
      totalText,
    };
    dateChage(resultDate);
  };

  const writeDay = (
    props: PickersDayProps<Dayjs> & { highlightedDays?: number[] },
  ) => {
    const { day: date, outsideCurrentMonth, ...other } = props;
    const year = date.year();
    const month = date.month() + 1;
    const day = date.date();

    const resultDate = totalDate(year, month, day);
    const existDate = diaryList.find(
      diary => diary.date.totalDate === resultDate,
    );

    const isSelected = !props.outsideCurrentMonth && !!existDate;
    const isFuture = dayjs(resultDate).diff(new Date()) > 0;

    return (
      <div key={props.day.toString()}>
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={date}
          disabled={isSelected || isFuture}
        />
      </div>
    );
  };
  return (
    <div className="bg-mood-lime rounded-3xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          maxDate={dayjs(new Date())}
          slots={{
            day: writeDay,
          }}
          onChange={handleChange}
        />
      </LocalizationProvider>
    </div>
  );
}

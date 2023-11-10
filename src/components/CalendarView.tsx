import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
  type PickersDayProps,
} from "@mui/x-date-pickers";
import { type Dayjs } from "dayjs";
import {
  type CalendarDateType,
  type CalendarViewProps,
} from "../interface/type";
import Emotion from "./Emotion";
import { totalDate } from "./data/common";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSetRecoilState } from "recoil";
import { calendarDateState } from "./data/dataState";
import { useNavigate } from "react-router-dom";

export default function CalendarView({ diaryList }: CalendarViewProps) {
  const navigate = useNavigate();
  const setCalendarDate = useSetRecoilState(calendarDateState);

  const handleChange = (value: any | null) => {
    const { $y: year, $M: month, $D: day } = value;
    const selectedDate = totalDate(year, month + 1, day);
    const selectedDiary = diaryList.find(
      diary => diary.date.totalDate === selectedDate,
    );

    // selectedDiary && navigate(`item/${selectedDiary.id}`);
    console.log({ selectedDate, selectedDiary });
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

    return (
      <div className="relative" key={props.day.toString()}>
        {isSelected && (
          <div className="absolute left-0 top-0 z-10 -m-1 pointer-events-none">
            <Emotion data={existDate.mood} />
          </div>
        )}
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={date}
        />
      </div>
    );
  };

  const hadleCalendarChange = (value: Dayjs) => {
    const year = value.year();
    const month = value.month() + 1;
    const result: CalendarDateType = {
      year,
      month,
    };
    setCalendarDate(result);
  };
  // view
  return (
    <div className="bg-white rounded-3xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          slots={{
            day: writeDay,
          }}
          onChange={handleChange}
          onMonthChange={hadleCalendarChange}
          onYearChange={hadleCalendarChange}
        />
      </LocalizationProvider>
    </div>
  );
}

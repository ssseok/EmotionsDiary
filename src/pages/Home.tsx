import { Link } from "react-router-dom";
import Title from "../components/Title";
import { useRecoilValue } from "recoil";
import {
  calendarDateState,
  diaryListState,
} from "../components/data/dataState";
import { useEffect } from "react";
import CalendarView from "../components/CalendarView";

export default function Home() {
  const diaryList = useRecoilValue(diaryListState);
  const calendarDate = useRecoilValue(calendarDateState);

  useEffect(() => {
    // console.log(diaryList);
  }, [diaryList]);

  return (
    <div className="flex flex-col h-full items-center">
      <Title
        mainTitle={`${calendarDate.month}월`}
        subTitle={`${calendarDate.year}년`}
      />
      <div className="py-6">
        <CalendarView diaryList={diaryList} />
      </div>

      <Link
        to={"/today-is"}
        className="w-10 h-10 bg-mood-purple rounded-full flex items-center justify-center item relative mt-auto"
      >
        <i className="block w-1 h-4 bg-neutral-800"></i>
        <i className="block w-1 h-4 bg-neutral-800 absolute transform rotate-90"></i>
        <span className="text-none">Add diary</span>
      </Link>
    </div>
  );
}

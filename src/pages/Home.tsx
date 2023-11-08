import { Link } from "react-router-dom";
import Emotion from "../components/Emotion";
import Title from "../components/Title";
import { moods } from "../components/data/common";
import { useRecoilValue } from "recoil";
import { diaryListState } from "../components/data/dataState";
import { useEffect } from "react";

export default function Home() {
  const diaryList = useRecoilValue(diaryListState);

  useEffect(() => {
    console.log(diaryList);
  }, [diaryList]);

  return (
    <div className="flex flex-col h-full items-center">
      <Title mainTitle="10월" subTitle="2023년" />
      <div className="flex flex-wrap">
        {diaryList.map(diary => (
          <Emotion key={diary.id} data={diary.mood} />
        ))}
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

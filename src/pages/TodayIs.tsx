import { useEffect, useState } from "react";
import CalendarSelect from "../components/CalendarSelect";
import EmotionSelect from "../components/EmotionSelect";
import { moods } from "../components/data/common";
import { type DiaryType, type MoodType } from "../interface/type";
import { initialDiary } from "../components/data/initialState";

export default function TodayIs() {
  const [diary, setDiary] = useState<DiaryType>(initialDiary);

  const handleDateChage = (date: string) => {
    const result = { ...diary, date };
    setDiary(result);
  };

  const handleEmotionChage = (mood: MoodType) => {
    setDiary(prev => ({ ...prev, mood }));
  };

  useEffect(() => {
    console.log("diary", diary);
  }, [diary]);
  return (
    <>
      <div className="py-2">
        <EmotionSelect
          title="오늘 하루 어땠니?"
          moods={moods}
          emotionChage={handleEmotionChage}
        />
      </div>
      <div className="py-2">
        <CalendarSelect dateChage={handleDateChage} />
      </div>
      <div className="py-2">
        <button
          type="button"
          className="w-full py-4 px-1 block rounded-3xl text-white text-sm font-medium bg-mood-blue-700"
        >
          일기 쓰러 가기
        </button>
      </div>
    </>
  );
}

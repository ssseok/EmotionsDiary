import CalendarSelect from "../components/CalendarSelect";
import EmotionSelect from "../components/EmotionSelect";
import { moods } from "../components/data/common";
import { type DiaryType, type MoodType } from "../interface/type";
import { useNavigate } from "react-router-dom";
import { diaryState } from "../components/data/dataState";
import { useRecoilState } from "recoil";
import Button from "../components/Button";

export default function TodayIs() {
  const navigate = useNavigate();

  const [diary, setDiary] = useRecoilState(diaryState);

  const handleDateChage = (date: string) => {
    const result = { ...diary, date };
    setDiary(result);
  };

  const handleEmotionChage = (mood: MoodType) => {
    setDiary(prev => ({ ...prev, mood }));
  };

  const handleClick = () => {
    const id = new Date().getTime() * 1000 * 60;
    setDiary(prev => ({ ...prev, id }));
    navigate("/mood");
  };

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
        <Button text="일기 쓰러 가기" onClick={handleClick} />
      </div>
    </>
  );
}

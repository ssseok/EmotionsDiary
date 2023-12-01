import CalendarSelect from "../components/CalendarSelect";
import EmotionSelect from "../components/EmotionSelect";
import { moods } from "../components/data/common";
import { type DateType, type MoodType } from "../interface/type";
import { useNavigate } from "react-router-dom";
import { diaryListState, diaryState } from "../components/data/dataState";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../components/Button";
import { toast } from "react-toastify";

export default function TodayIs() {
  const navigate = useNavigate();

  const diaryList = useRecoilValue(diaryListState);

  const [diary, setDiary] = useRecoilState(diaryState);

  const handleDateChage = (date: DateType) => {
    const result = { ...diary, date };
    setDiary(result);
  };
  const handleEmotionChage = (mood: MoodType) => {
    setDiary(prev => ({ ...prev, mood }));
  };

  const handleClick = () => {
    if (diary?.mood?.description === "" || diary?.date?.totalDate === "") {
      toast.error("오늘 하루와 날짜를 선택해주세요.");
      return;
    }
    const id = new Date().getTime() * 1000 * 60;
    setDiary(prev => ({ ...prev, id }));
    navigate("/mood");
  };
  return (
    <>
      <div className="pb-2">
        <EmotionSelect
          title="오늘 하루 어땠니?"
          moods={moods}
          emotionChage={handleEmotionChage}
        />
      </div>
      <div className="py-2">
        <CalendarSelect dateChage={handleDateChage} diaryList={diaryList} />
      </div>
      <div className="py-2">
        <Button text="일기 쓰러 가기" onClick={handleClick} />
      </div>
    </>
  );
}

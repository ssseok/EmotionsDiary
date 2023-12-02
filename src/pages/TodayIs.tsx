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
    // 날짜와 감정이 모두 선택되었는지 확인
    if (
      !diary.date ||
      !diary.mood ||
      diary.mood.description === "" ||
      diary.date.totalDate === ""
    ) {
      toast.error("날짜와 감정을 모두 선택해주세요.");
      return;
    }

    // 이미 선택된 날짜인지 확인
    const isDateAlreadyUsed = diaryList.some(
      diaryItem => diaryItem.date.totalDate === diary.date.totalDate,
    );

    if (isDateAlreadyUsed) {
      toast.error("이미 선택된 날짜입니다. 다른 날짜를 선택해주세요.");
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

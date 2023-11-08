import { useState } from "react";
import Emotion from "../components/Emotion";
import { moods } from "../components/data/common";
import { useRecoilState, useSetRecoilState } from "recoil";
import { diaryListState, diaryState } from "../components/data/dataState";
import DiaryInput from "../components/DiaryInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Mood() {
  const navigate = useNavigate();
  const [diary, setDiary] = useRecoilState(diaryState);
  const { date, mood } = diary;

  const setDiaryList = useSetRecoilState(diaryListState);

  const [diaryValue, setDiaryValue] = useState("");
  const [isReset, setIsReset] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 내부 input
    const resultDiary = { ...diary, diary: diaryValue };
    setDiary(resultDiary);
    setDiaryValue("");
    setIsReset(true);
    // diaryList 업데이트
    setDiaryList(prev => [...prev, resultDiary]);
    // 페이지 이동
    navigate("/");
  };

  console.log({ diary, diaryValue });

  const handleChange = (value: string) => {
    setDiaryValue(value);
    isReset && setIsReset(false);
  };
  return (
    <>
      <div className="border border-mood-gray-700 rounded-xl px-4 py-6">
        <div className="py-2">
          {/* START: date */}
          <p>{date}</p>
          {/* START: date */}
        </div>
        <div className="py-2">
          <Emotion data={mood} />
        </div>
        <div className="py-2">
          <form id="diaryForm" onSubmit={handleSubmit}>
            <DiaryInput onChange={handleChange} isReset={isReset} />
          </form>
        </div>
      </div>
      <div className="pt-8">
        <Button type="submit" formId="diaryForm" text="일기 저장하기" />
      </div>
    </>
  );
}

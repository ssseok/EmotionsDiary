import CalendarSelect from "../components/CalendarSelect";
import EmotionSelect from "../components/EmotionSelect";
import { moods } from "../components/data/common";
import { type MoodType } from "../interface/type";

export default function TodayIs() {
  const handleDateChage = (date: string) => {
    console.log("🚀 : date==>", date);
  };

  const handleEmotionChage = (data: MoodType) => {
    console.log("🚀 : data==>", data);
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
    </>
  );
}

import CalendarSelect from "../components/CalendarSelect";
import EmotionSelect from "../components/EmotionSelect";
import { moods } from "../components/data/common";

export default function TodayIs() {
  return (
    <>
      <div className="py-2">
        <EmotionSelect title="오늘 하루 어땠니?" moods={moods} />
      </div>
      <div className="py-2">
        <CalendarSelect />
      </div>
    </>
  );
}

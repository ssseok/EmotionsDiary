import EmotionSelect from "../components/EmotionSelect";
import { moods } from "../components/data/common";

export default function TodayIs() {
  return (
    <div>
      <EmotionSelect title="오늘 하루 어땠니?" moods={moods} />
    </div>
  );
}

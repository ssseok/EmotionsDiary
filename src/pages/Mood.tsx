import Emotion from "../components/Emotion";
import { moods } from "../components/data/common";

export default function Mood() {
  return (
    <div>
      <Emotion data={moods[2]} />
    </div>
  );
}

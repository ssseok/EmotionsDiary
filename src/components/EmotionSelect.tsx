import { useState } from "react";
import { type MoodType, type EmotionSelectProps } from "../interface/type";

export default function EmotionSelect({
  title,
  moods,
  emotionChage,
}: EmotionSelectProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    mood: MoodType,
  ) => {
    const { value } = event.target;
    setValue(value);
    emotionChage(mood);
  };
  return (
    <>
      <span className="block">{title}</span>
      <div className="flex flex-wrap">
        {moods?.map(mood => (
          <div key={mood.id} className="p-2 w-1/4">
            <label>
              <input
                id={mood.name}
                value={mood.name}
                type="radio"
                name="mood"
                className="peer w-0 h-0 absolute inset-0"
                checked={value === mood.name}
                onChange={event => {
                  handleChange(event, mood);
                }}
              />
              <div className="peer-checked:border-2 rounded-xl border-red-500 p-1">
                <img src={`./images/${mood.name}.svg`} alt={mood.name} />
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

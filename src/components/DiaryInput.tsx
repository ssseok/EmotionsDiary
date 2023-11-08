import { useEffect, useState } from "react";
import { type DirayInputProps } from "../interface/type";

export default function DiaryInput({ isReset, onChange }: DirayInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
    setValue(value);
  };

  useEffect(() => {
    isReset && setValue("");
  }, [isReset]);

  return (
    <>
      <input
        type="text"
        placeholder="일기를 써주세요"
        className="bg-mood-purple w-full rounded-md py-2 px-4"
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

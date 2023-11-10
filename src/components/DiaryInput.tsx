import { useEffect, useState } from "react";
import { type DirayInputProps } from "../interface/type";

export default function DiaryInput({
  isReset,
  onChange,
  value,
  readonly,
}: DirayInputProps) {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange && onChange(value);
    setInput(value);
  };

  useEffect(() => {
    isReset && setInput("");
  }, [isReset]);

  return (
    <>
      <input
        type="text"
        placeholder="일기를 써주세요"
        className="bg-mood-purple w-full rounded-md py-2 px-4"
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        value={value || input}
        readOnly={!!readonly}
        onChange={handleChange}
      />
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { type DirayInputProps } from "../interface/type";

export default function DiaryInput({
  isReset,
  onChange,
  value,
  readonly,
  isFocus,
  bgColor,
}: DirayInputProps) {
  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange && onChange(value);
    setInput(value);
  };

  useEffect(() => {
    isReset && setInput("");
  }, [isReset]);

  useEffect(() => {
    value && setInput(value);
  }, [value]);

  useEffect(() => {
    isFocus && inputRef.current && inputRef.current.focus();
  }, [isFocus]);

  return (
    <>
      <input
        type="text"
        placeholder="일기를 써주세요"
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        className={`${bgColor || "bg-yellow-200"} w-full rounded-md py-2 px-4`}
        value={input}
        ref={inputRef}
        readOnly={!!readonly}
        onChange={handleChange}
      />
    </>
  );
}

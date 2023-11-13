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

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <textarea
        // type="text"
        placeholder="일기를 써주세요"
        rows={10}
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        className={`${bgColor || "bg-yellow-200"} w-full rounded-md py-2 px-4`}
        value={input}
        maxLength={1000}
        ref={inputRef}
        readOnly={!!readonly}
        onChange={handleChange}
      />
      <div className="text-gray-500 flex justify-end">{`${input.length}/1000`}</div>
    </>
  );
}

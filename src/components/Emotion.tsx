import { type EmotionProps } from "../interface/type";

export default function Emotion({ data, size }: EmotionProps) {
  const sizeList = [
    {
      size: "small",
      width: "8",
    },
    {
      size: "medium",
      width: "16",
    },
    {
      size: "large",
      width: "24",
    },
  ];
  return (
    <div
      className={`p-1 w-${
        size ? sizeList.find(item => item.size === size)?.width : "fit"
      } mx-auto text-center`}
    >
      <img src={`/images/${data.name}.svg`} alt={data.name} />
    </div>
  );
}

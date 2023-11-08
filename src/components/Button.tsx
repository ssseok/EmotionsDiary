import { type ButtonProps } from "../interface/type";

export default function Button({ text, type, formId, onClick }: ButtonProps) {
  return (
    <>
      {type === "submit" ? (
        <button
          type={type}
          className="w-full py-4 px-1 block rounded-3xl text-white text-sm font-medium bg-mood-blue-700"
          form={formId}
        >
          {text}
        </button>
      ) : (
        <button
          type={"button"}
          className="w-full py-4 px-1 block rounded-3xl text-white text-sm font-medium bg-mood-blue-700"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
}

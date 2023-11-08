import { atom } from "recoil";
import { type DiaryType } from "../../interface/type";
import { initialDiary } from "./initialState";

export const diaryState = atom<DiaryType>({
  key: "diaryState",
  default: initialDiary,
});

export const diaryListState = atom<DiaryType[]>({
  key: "diaryListState",
  default: [],
});

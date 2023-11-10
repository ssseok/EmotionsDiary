import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Emotion from "../components/Emotion";
import Title from "../components/Title";
import DiaryInput from "../components/DiaryInput";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { type DiaryType } from "../interface/type";
import { diaryListState } from "../components/data/dataState";

export default function Item() {
  const params = useParams();

  const diaryList = useRecoilValue(diaryListState);

  const [selectedDiary, setSelectedDiary] = useState<DiaryType | null>(null);

  const updateDiary = () => {};

  const removeDiary = () => {};

  useEffect(() => {
    const id = params.itemId;
    diaryList.forEach(diary => {
      console.log("diaryId", diary.id);
      console.log("🚀 id:", id);
    });
    const item = id && diaryList.find(diary => diary.id === Number(id));
    console.log("🚀  item:", item);

    item && setSelectedDiary(item);
  }, [diaryList, params.itemId]);

  useEffect(() => {
    console.log("selectedDiary", selectedDiary);
  }, [selectedDiary]);

  // view
  return (
    <>
      {selectedDiary && (
        <div className="border border-mood-gray-700 rounded-xl px-4 py-6">
          <div className="py-2">
            {/* START: date */}
            <p>{selectedDiary.date.totalText}</p>
            {/* START: date */}
          </div>
          <div className="py-2 flex justify-end">
            <IconButton aria-label="edit" onClick={updateDiary}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={removeDiary}>
              <DeleteIcon />
            </IconButton>
          </div>
          <div className="py-2">
            <Emotion data={selectedDiary.mood} size={"large"} />
          </div>
          <div className="py-2">
            <Title mainTitle={selectedDiary.mood.description} />
          </div>
          <div className="py-2">
            <DiaryInput value={selectedDiary.diary} readonly isReset={false} />
          </div>
        </div>
      )}
      {/* <div className="pt-8">
        <Button text="일기 저장하기" />
      </div> */}
    </>
  );
}

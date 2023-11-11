import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Mood from "../pages/Mood";
import TodayIs from "../pages/TodayIs";
import Item from "../pages/Item";
import PrevButton from "./layout/PrevButton";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<PrevButton />}>
        <Route path="/mood" element={<Mood />} />
        <Route path="/today-is" element={<TodayIs />} />
        <Route path="/item/:itemId" element={<Item />} />
      </Route>
    </Routes>
  );
}

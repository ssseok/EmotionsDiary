import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Mood from "../pages/Mood";
import TodayIs from "../pages/TodayIs";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mood" element={<Mood />} />
      <Route path="/today-is" element={<TodayIs />} />
    </Routes>
  );
}

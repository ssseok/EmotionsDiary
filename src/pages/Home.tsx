import Emotion from "../components/Emotion";
import Title from "../components/Title";
import { moods } from "../components/data/common";

export default function Home() {
  return (
    <>
      <Title mainTitle="10월" subTitle="2023년" />
      <Emotion data={moods[1]} />
    </>
  );
}

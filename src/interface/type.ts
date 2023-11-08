// layout
export interface LayoutProps {
  children: React.ReactNode;
}

// data
export interface MoodType {
  id: number;
  name: string;
  description: string;
}

// title
export interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

// emotion
export interface EmotionProps {
  data: MoodType;
  size?: "small" | "medium" | "large"; // small, medium, large
}

// emotion_select
export interface EmotionSelectProps {
  title: string;
  moods: MoodType[];
  emotionChage: (data: MoodType) => void;
}

// calendar_select
export interface CalendarSelectProps {
  dateChage: (date: string) => void;
}

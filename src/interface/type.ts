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

export interface DiaryType {
  id: number;
  mood: MoodType;
  date: string;
  diary: string;
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

// button
export interface ButtonProps {
  text: string;
  type?: "button" | "submit";
  formId?: string;
  onClick?: () => void;
}

// diary_input
export interface DirayInputProps {
  isReset: boolean;
  onChange: (value: string) => void;
}

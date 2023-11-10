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
export interface DateType {
  year: number;
  month: number;
  day: number;
  dayOfWeeks: string;
  totalDate: string;
  totalText: string;
}

export interface DiaryType {
  id: number;
  mood: MoodType;
  date: DateType;
  diary: string;
}

export interface CalendarDateType {
  year: number;
  month: number;
}
// title
export interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

// emotion
export interface EmotionProps {
  data: MoodType;
  size?: string; // small, medium, large
}

// emotion_select
export interface EmotionSelectProps {
  title: string;
  moods: MoodType[];
  emotionChage: (data: MoodType) => void;
}

// calendar_select
export interface CalendarSelectProps {
  dateChage: (date: DateType) => void;
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
  onChange?: (value: string) => void;
  value?: string;
  readonly?: boolean;
}

// calendar_view
export interface CalendarViewProps {
  diaryList: DiaryType[];
}

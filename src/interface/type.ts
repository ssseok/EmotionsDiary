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

// emotion
export interface EmotionProps {
  data: MoodType;
  size?: "small" | "medium" | "large"; // small, medium, large
}

// emotion
export interface EmotionSelectProps {
  title: string;
  moods: MoodType[];
}

export interface LessonFrontmatter {
  title: string;
  description: string;
  type: "instruction" | "activity";
  order: number;
}

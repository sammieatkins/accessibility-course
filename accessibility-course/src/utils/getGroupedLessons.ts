import { getCollection } from "astro:content";
import type Lesson from "../types/Lesson";

export async function getGroupedLessons(): Promise<[string, Lesson[]][]> {
  const lessons = await getCollection("lessons");

  const groupedLessons = lessons.reduce((groups, lesson) => {
    const folder = lesson.id.split("/")[0];
    if (!groups[folder]) {
      groups[folder] = [];
    }
    groups[folder].push(lesson);
    return groups;
  }, {} as Record<string, Lesson[]>);

  const sortedGroups = Object.entries(groupedLessons).map(
    ([folder, lessons]) => {
      const sortedLessons = lessons.sort((a, b) => {
        const aType = a.data.type || "";
        const bType = b.data.type || "";

        if (aType === "instruction" && bType !== "instruction") return -1;
        if (bType === "instruction" && aType !== "instruction") return 1;

        return (a.data.order ?? 100) - (b.data.order ?? 100);
      });

      return [folder, sortedLessons] as [string, Lesson[]];
    }
  );

  return sortedGroups;
}

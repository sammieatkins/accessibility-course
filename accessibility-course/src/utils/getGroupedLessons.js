import { getCollection } from 'astro:content';

export async function getGroupedLessons() {
  // Get all lesson files from the "lessons" collection
  const lessons = await getCollection('lessons');

  // Group lessons by the folder name (i.e., the first part of `lesson.id` before "/")
  const groupedLessons = lessons.reduce((groups, lesson) => {
    const folder = lesson.id.split('/')[0];
    if (!groups[folder]) {
      groups[folder] = [];
    }
    groups[folder].push(lesson);
    return groups;
  }, {});

  // Convert the grouped object to an array for easier iteration.
  return Object.entries(groupedLessons);
}

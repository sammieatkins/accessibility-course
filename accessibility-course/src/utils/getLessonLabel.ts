export function getLessonLabel({
  fileName,
  folderName,
  title,
  index,
}: {
  fileName: string;
  folderName: string;
  title: string;
  index: number;
}): string {
  const readableFileName = fileName
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase → spaced
    .replace(/-/g, " ") // kebab-case → spaced
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize

  const isIntroFolder = folderName.toLowerCase().includes("intro");

  if (isIntroFolder && fileName === "instruction") {
    return "Introduction";
  } else if (isIntroFolder) {
    return `Intro: ${readableFileName}`;
  } else if (fileName === "instruction") {
    return `${title}: Instruction`;
  } else if (fileName === "activity") {
    return `${title}: Activity`;
  } else {
    return `${title}: ${readableFileName}`;
  }
}

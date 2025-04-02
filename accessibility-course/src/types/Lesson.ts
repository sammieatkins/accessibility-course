export default interface Lesson {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    order?: number;
    type?: string;
  };
}

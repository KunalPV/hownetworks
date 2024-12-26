import Card from "./Card";

const topics = [
  "What happens when you accept cookies",
  "What happens when you give permission to websites",
  "What websites know about your device",
  "What happens when you enable your location",
  "How Incognito mode works (and doesn't work)",
];


export default function CardContainer() {
  return (
    <div className="max-w-md md:max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-2 p-2">
      {topics.map((title) => (
        <Card key={title} title={title} />
      ))}
    </div>
  );
}
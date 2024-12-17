import Document from "../Document";

export default function GradientText() {
  document.title = "Learn how to create Gradient Text in CSS!";
  return (
    <Document>
      <Document.Title>Gradient Text</Document.Title>
      <div className="w-full  h-screen p-2 flex flex-col">
        <span className="mx-auto bg-gradient bg-clip-text text-transparent text-sm text-center stroke-2 stroke-red-500">Just like with borders, creating gradient text requires more creativity, since it cannot be done with natively.</span>
        <span>x</span>
      </div>
    </Document>
  );
}

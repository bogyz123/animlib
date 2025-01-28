import CodeSample from "../CodeSample";
import Document from "../Document";
import useTooltip from "../hooks/useTooltip";

export default function GradientText() {
  const handleTooltipClick = useTooltip();
  document.title = "Learn how to create Gradient Text in CSS!";
  return (
    <Document>
      <Document.Title>Gradient Text</Document.Title>
      <div className="w-full  h-screen p-2 flex flex-col " onClick={(e) => handleTooltipClick(e)}>
        <span className="mx-auto bg-gradient bg-clip-text text-transparent text-sm  stroke-2 stroke-red-500">Just like with borders, creating gradient text requires more creativity, since it cannot be done with natively.</span>
        <Document.Content>
          <div className="mt-5 pl-3 text-sm flex flex-col gap-y-2 ">
            <div>
              <Document.Header>Creating Gradient Text</Document.Header>
            </div>
            <span>
              We will make the background of the text element be linear-gradient and use <span className="highlighted">bg-clip-text</span> property on it.
              <br />
            </span>
            <span>
              This will clip the background (gradient) inside of the text, as long as the text is transparent. (Use <span className="highlighted">text-transparent</span> property)
            </span>

            <Document.Subheader>Steps to create gradient text</Document.Subheader>
            <ol className="list">
              <li>
                1. Create a paragraph and apply <span className="highlighted">text-transparent</span> and <span className="highlighted">bg-clip-text</span> properties.
              </li>
              <li>
                2. Create a background of <span className="highlighted">linear-gradient</span> with colors of your choice.
              </li>
            </ol>
          </div>
          <div className="my-3 w-fit">
            <CodeSample
              language={["JavaScript"]}
              pages={[
                `<span 
      className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      I am gradient-colored!</span>
  `,
              ]}
            />
          </div>

          <div>
            <Document.Header>The result</Document.Header>
          </div>

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit">I am gradient-colored!</span>
        </Document.Content>
      </div>
    </Document>
  );
}

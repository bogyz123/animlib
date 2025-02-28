import CodeSample from "../CodeSample";
import Document from "../Document";
import useTooltip from "../hooks/useTooltip";

export default function GradientText() {
  const handleTooltipClick = useTooltip();
  document.title = "Learn how to create Gradient Text in CSS!";

  return (
    <Document>
      <Document.Title>Gradient Text</Document.Title>
      <div className="w-full h-screen p-2 flex flex-col" onClick={(e) => handleTooltipClick(e)}>
        <Document.Explanation className="mx-auto bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent text-2xl font-bold py-2 text-center">
          Creating gradieng text can be done by creating a gradient background underneath it and clipping the text to the background itself.
        </Document.Explanation>
        <Document.Content>
          <div className="mt-5 pl-3 text-sm flex flex-col gap-y-2">
            <Document.Header>Creating Gradient Text</Document.Header>
            <span>
              We will make the background of the text element a linear-gradient and use the <span className="highlighted">bg-clip-text</span> property on it.
              <br />
              This will clip the background (gradient) inside of the text, as long as the text is transparent. (Use <span className="highlighted">text-transparent</span> property)
            </span>

            <Document.Subheader>Steps to Create Gradient Text</Document.Subheader>
            <ol className="list-decimal list-inside">
              <li>Create a paragraph and apply <span className="highlighted">text-transparent</span> and <span className="highlighted">bg-clip-text</span> properties.</li>
              <li>Create a background of <span className="highlighted">linear-gradient</span> with colors of your choice.</li>
            </ol>
          </div>
          <div className="my-3 w-fit">
            <CodeSample
              language={["HTML"]}
              pages={[
                `<span 
      className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      I am gradient-colored!
</span>
  `,
              ]}
            />
          </div>

          <Document.Header>The Result</Document.Header>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xl font-medium w-fit">
            I am gradient-colored!
          </span>
        </Document.Content>
      </div>
    </Document>
  );
}
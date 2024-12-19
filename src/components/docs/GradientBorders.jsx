import CodeSample from "../CodeSample";
import Document from "../Document";
import useTooltip from "../hooks/useTooltip";

export default function GradientBorders() {
  const onTooltipClick = useTooltip();
  return (
    <Document>
      <Document.Title>Gradient Borders</Document.Title>
      <div onClick={(e) => onTooltipClick(e)}>
        <div className="px-4 md:px-12 lg:px-20 mt-2 text-sm text-gray-300 tracking-wide -z-20 flex flex-col">
          <span className="mx-auto text-center md:text-start">Gradient color around elements cannot be done with the 'border' property, but we can get it to work with a little bit of creativity.</span>
          <div className="bg-card mx-auto p-4 rounded-md relative my-12 w-full text-center ">
            <span>Gradient Borders</span>
            <div className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-10 -m-1"></div>
          </div>
          <div className="flex gap-2 text-sm md:text-base ">
            <div className="flex flex-col ">
              <span>1. Create a containing element, a box.</span>
              <span>2. Create some text inside of the box.</span>
              <span>3. Create the gradient element underlapping the parent.</span>
            </div>
          </div>

          <div className="my-2">
            <CodeSample>
              {`
    <div className="bg-card p-4 rounded-md relative">
      <span>Gradient Borders</span>
      
      <div
        className="bg-[conic-gradient(red, blue, purple, red)] absolute inset-0 rounded-md -z-10 -m-1"
      ></div>
    </div>
  `}
            </CodeSample>
            <div className="my-2 w-full flex flex-col gap-y-4 ">
              <span>
                We can also make it glow by adding <span className="highlighted ">filter: blur(amount)</span> function to the gradient element.
              </span>
              <span>This will blur the border slightly, giving it a glowing effect.</span>
              <div className="relative bg-card text-center py-4 my-4 text-gray-300">
                <span>I look like this now!</span>
                <div className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-20 -m-1 blur-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Document>
  );
}

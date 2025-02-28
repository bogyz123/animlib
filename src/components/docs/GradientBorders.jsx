import CodeSample from "../CodeSample";
import Document from "../Document";
import useTooltip from "../hooks/useTooltip";

export default function GradientBorders() {
  const onTooltipClick = useTooltip();
  return (
    <Document>
      <Document.Title>Gradient Borders</Document.Title>
      <div onClick={(e) => onTooltipClick(e)}>
        <div className="px-4 md:px-12 lg:px-20 mt-2 text-sm text-gray-300 tracking-wide -z-20 flex flex-col  ">
          <Document.Explanation>
            <span>
              There isn't a single property to define a gradient border around
              an element but it can be done by creating a gradient background on
              the element and making it slightly bigger than the element itself,
              so it shows only the borders.
            </span>
          </Document.Explanation>
          <Document.Header>Creating a gradient border</Document.Header>
          <div className="flex gap-2 text-sm md:text-base ">
            <div className="flex flex-col ">
              <span>
                1. Create a box container that will hold the background and the
                text.
              </span>
              <span>2. Create some text inside of the box.</span>
              <span>
                3. Create the gradient element underlapping the parent.
              </span>
            </div>
          </div>

          <div className="my-2 w-fit">
            <CodeSample
              language={["JSX"]}
              pages={[
                `
    <div className="bg-card p-4 rounded-md relative">
      <span>Gradient Borders</span>
      <div
        className="bg-[conic-gradient(red, blue, purple, red)] 
                   absolute inset-0 rounded-md -z-10 -m-1"
      >
      </div>
    </div>
    `,
              ]}
            />
          </div>
          <div className="max-w-[100%] md:max-w-[50%] text-base">
            <div>
              In the example above we created a container that has the text and
              a div gradient element.
            </div>
            <div>
              The gradient is clipped under the text with a -z index and a
              negative margin to be slightly bigger than the text element,
              revealing the gradient sides.
            </div>
            <div className="w-full  p-1 flex gap-4">
              <div className="w-full relative bg-card text-center py-4 my-4 text-gray-300 ">
                <span>I look like this now!</span>
                <div className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-20 -m-1 "></div>
              </div>
              <div className="w-full relative bg-card text-center py-4 my-4 text-gray-300 group">
                <span>filter: blur(amount)</span>
                <div className="bg-[conic-gradient(red,blue,purple,red)] absolute inset-0 rounded-md -z-20 -m-1 blur-md"></div>
              </div>
            </div>
            <div className="text-base">
              <div>
                We can also make blur the gradient using filter: blur(amount)
                property to give a more glowing appearance.
              </div>
              <div>
                You can also create a hover animation for the filter: (blur)
                property.
              </div>
              <div className="w-full relative bg-card text-center py-4 my-4 text-gray-300 group cursor-pointer">
                <span>Hover me!</span>
                <div className="bg-[conic-gradient(purple,indigo,crimson,purple)] absolute inset-0 rounded-md -z-20 -m-1 ease group-hover:blur-md transition-all duration-300 ease"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Document>
  );
}

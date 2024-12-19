export default function Document({ children }) {
  return <div className="text-white h-screen w-full flex flex-col font-inter">{children}</div>;
}
Document.Title = function Title({ children }) {
  return <div className="text-center font-lg md:font-2xl mt-2 md:mt-4 font-bold">{children}</div>;
};
Document.Content = function Content({ children }) {
  return <div className="text-gray-300 flex flex-col gap-2  sm:pl-2 md:pl-12 lg:pl-16">{children}</div>;
};
Document.Header = function Header({ children }) {
  return <h1 className="text-white font-inter text-base md:text-xl lg:text-xl select-none font-semibold">{children}</h1>;
};
Document.Separator = function Separator({ width }) {
  return <div className={`border border-gray-400 ${width}`}></div>;
};

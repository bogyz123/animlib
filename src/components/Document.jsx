export default function Document({ children }) {
  return <div className="text-white w-full flex flex-col font-inter ">{children}</div>;
}
Document.Title = function Title({ children }) {
  return <div className="text-center font-lg md:font-2xl mt-2 md:mt-4 font-bold mx-auto  w-fit">{children}</div>;
};
Document.Content = function Content({ children }) {
  return <div className="text-gray-300  bg-black min-h-max px-6">{children}</div>;
};
Document.Header = function Header({ children }) {
  return <h1 className="text-white font-inter text-base md:text-xl my-2 lg:text-xl select-none font-extrabold">{children}</h1>;
};
Document.Subheader = function Subheader({ children }) {
  return <h1 className="text-white font-inter text-base md:text-md my-2  select-none font-semibold">{children}</h1>;
};
Document.Separator = function Separator({ width }) {
  return <div className={`border border-gray-400 ${width}`}></div>;
};

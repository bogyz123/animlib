export default function Document({ children }) {
  return <div className="text-white h-screen w-full flex flex-col font-inter">{children}</div>;
}
Document.Title = function Title({ children }) {
  return <div className="text-center font-lg md:font-2xl mt-2 md:mt-4 font-bold">{children}</div>;
};
Document.Content = function Content({ children }) {
  return <div className="text-gray-300 flex flex-col gap-2">{children}</div>;
};

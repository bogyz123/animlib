export default function Document({ children }) {
  return <div className="text-white w-full flex flex-col min-h-screen scroll-smooth ">{children}</div>;
}
Document.Title = function Title({ children }) {
  return <div className="uppercase text-center text-xl md:text-2xl underline underline-offset-2 mt-2 md:mt-4 font-extrabold mx-auto w-fit sans animated-fromLeft">{children}</div>;
};
Document.Content = function Content({ children }) {
  return <div className=" text-gray-300 z-20   py-4  pl-6 md:pl-8  pr-4 flex flex-col  tracking-wide text-md md:text-lg document-content ml-2 md:ml-4 xl:ml-6 ">{children}</div>;
};
Document.Explanation = function Explanation({children}) {
  return <div className="document-explanation sans tracking-wide text-gray-300  px-8 py-2 md:px-12 md:py-4 w-fit lg:max-w-[60%] ml-2 md:ml-4 xl:ml-6">{children}</div>
}
Document.Header = function Header({ children, classes }) {
  return (
    <h1
      className={`text-white text-base md:text-xl my-2 lg:text-xl select-none font-extrabold inline-block justify-between animate-typing overflow-hidden whitespace-nowrap ${classes && classes.join("")}`}
      style={{
        "--animation-duration": `${Math.max(1, children.length * 0.05)}s`,
        "--animation-steps": "32",
        "--animation-delay": "0s",
        "--from-ch": "0ch",
        "--to-ch": `${children.length}ch`,
      }}
    >
      {children}
    </h1>
  );
};
Document.Subheader = function Subheader({ children }) {
  return <h1 className="text-gray-200  text-base my-2 select-none font-semibold">{children}</h1>;
};
Document.Separator = function Separator({ width }) {
  return <div className={`border border-gray-400 my-4 ${width}`}></div>;
};

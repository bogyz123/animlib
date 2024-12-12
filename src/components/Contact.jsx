export default function Contact() {
  return (
    <div className="bg-card flex flex-col md:flex-row p-2 md:p-6 rounded-md justify-between h-full">
      <div className="flex flex-col md:justify-between ">
        <h1 className="font-bold text-base md:text-xl">Contact Me</h1>
        <p className="font-inter text-sm">Email | bogdandjakovic123@gmail.com</p>
      </div>

      <div className=" flex flex-col gap-2  grow md:max-w-[50%] ">
        <input type="text" className="bg-inherit border-b focus:border:gray-600 p-1 md:p-2" placeholder="Name" />
        <input type="text" className="bg-inherit border-b focus:border:gray-600 p-1 md:p-2" placeholder="Subject" />
        <input type="text" className="bg-inherit border-b focus:border:gray-600 p-1 md:p-3" placeholder="Text" />
        <button className="bg-dark p-1 rounded-md my-0.5 md:my-2 hover:bg-purple-950">Send</button>
      </div>
    </div>
  );
}

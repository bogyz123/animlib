import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: null,
    subject: null,
    message: null,
  });
  const handleSubmit = () => {
    const hasNullData = Object.values(formData).some((val) => val === null);
    if (!hasNullData) {
      console.log("Sent! (dummy)");
    } else {
      console.log("Input all the fields.");
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="bg-card flex flex-col md:flex-row p-2 md:p-6 rounded-md justify-between h-full">
      <div className="flex flex-col md:justify-between ">
        <h1 className="font-bold text-base md:text-xl">Contact Me</h1>
        <p className="font-inter text-sm">Email | bogdandjakovic123@gmail.com</p>
      </div>

      <div className=" flex flex-col gap-2  grow md:max-w-[50%] ">
        <input type="text" name="name" className="bg-inherit border-b focus:border:gray-600 p-1 md:p-2" placeholder="Name" onChange={handleOnChange} />
        <input type="text" name="subject" className="bg-inherit border-b focus:border:gray-600 p-1 md:p-2" placeholder="Subject" onChange={handleOnChange} />
        <input type="text" name="message" className="bg-inherit border-b focus:border:gray-600 p-1 md:p-3" placeholder="Message" onChange={handleOnChange} />
        <button className="bg-dark p-1 rounded-md my-0.5 md:my-2 hover:bg-purple-950" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}

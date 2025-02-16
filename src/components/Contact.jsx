import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const hasEmptyFields = Object.values(formData).some((val) => val.trim() === "");
    if (!hasEmptyFields) {
      console.log("Sent! (dummy)");
      setFormData({ name: "", subject: "", message: "" }); 
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
    <div className="bg-card flex flex-col md:flex-row p-4 md:p-8 rounded-lg justify-between h-full text-white shadow-lg transform transition duration-500 ease-in-out hover:scale-105">
      <div className="flex flex-col md:justify-between mb-4 md:mb-0">
        <h1 className="font-bold text-lg md:text-2xl mb-2">Contact Me</h1>
        <p className="text-sm md:text-base">Email | bogdandjakovic123@gmail.com</p>
      </div>

      <form className="flex flex-col gap-4 grow md:max-w-[50%]" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          className="bg-transparent border-b-2 border-gray-500 focus:border-purple-500 p-2 transition duration-300 ease-in-out transform focus:scale-105" 
          placeholder="Name" 
          onChange={handleOnChange} 
          aria-label="Name"
          value={formData.name}
        />
        <input 
          type="text" 
          name="subject" 
          className="bg-transparent border-b-2 border-gray-500 focus:border-purple-500 p-2 transition duration-300 ease-in-out transform focus:scale-105" 
          placeholder="Subject" 
          onChange={handleOnChange} 
          aria-label="Subject"
          value={formData.subject}
        />
        <textarea 
          name="message" 
          className="bg-transparent border-b-2 border-gray-500 focus:border-purple-500 p-2 transition duration-300 ease-in-out transform focus:scale-105 h-32 resize-none" 
          placeholder="Message" 
          onChange={handleOnChange} 
          aria-label="Message"
          value={formData.message}
        ></textarea>
        <button 
          type="submit" 
          className="bg-purple-600 hover:bg-purple-700 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="Send message"
        >
          Send
        </button>
      </form>
    </div>
  );
}
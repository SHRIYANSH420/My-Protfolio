import React from "react";
import { useTheme } from "../App"; // Adjust the import path as needed

const Contactus = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "4a9403d1-d892-4187-b671-943f4b96337e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setFormData("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setFormData(data.message);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`w-full max-w-md ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-8">CONTACT</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="access_key" value="4a9403d1-d892-4187-b671-943f4b96337e"/>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className={`w-full p-2 rounded-lg ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            } border ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className={`w-full p-2 rounded-lg ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            } border ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows="5"
            className={`w-full p-2 rounded-lg ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            } border ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}
            required
          ></textarea>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;

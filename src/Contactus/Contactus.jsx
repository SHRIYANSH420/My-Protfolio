import React, { useState } from "react";
import { useTheme } from "../App"; // Adjust the import path as needed
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin } from 'lucide-react';

const ContactWithFooter = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Sending....");
    const formDataToSend = new FormData(e.target);
    formDataToSend.append("access_key", "4a9403d1-d892-4187-b671-943f4b96337e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log("Error", data);
        setSubmitStatus(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${
      isDarkMode 
        ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" 
        : "bg-gradient-to-br from-blue-100 via-white to-blue-100"
    } ${isDarkMode ? "text-white" : "text-gray-800"}`}>
      <main className="flex-grow w-full py-12 px-4 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">CONTACT</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="4a9403d1-d892-4187-b671-943f4b96337e"/>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <label htmlFor="name" className="text-xl mb-2 block">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg text-lg ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                } border ${isDarkMode ? "border-purple-500" : "border-blue-300"} focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                required
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <label htmlFor="email" className="text-xl mb-2 block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg text-lg ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                } border ${isDarkMode ? "border-purple-500" : "border-blue-300"} focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                required
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <label htmlFor="message" className="text-xl mb-2 block">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className={`w-full p-3 rounded-lg text-lg ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                } border ${isDarkMode ? "border-purple-500" : "border-blue-300"} focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                required
              ></textarea>
            </motion.div>
            <div className="text-right">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              >
                Submit
              </motion.button>
            </div>
          </form>
          {submitStatus && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-4 text-center text-xl font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {submitStatus}
            </motion.p>
          )}
        </motion.div>
      </main>
      <footer className={`py-4 ${isDarkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-200 bg-opacity-50'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Shriyansh Rauthan
          </p>
          <div className="flex space-x-4">
            <a href="https://x.com/Shriyansh200" className={`transform transition-transform duration-300 hover:scale-125 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/SHRIYANSH420" className={`transform transition-transform duration-300 hover:scale-125 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shriyansh-rauthan-950929299/" className={`transform transition-transform duration-300 hover:scale-125 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactWithFooter;
"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "@/components/navbar/Navbar";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvoekavb");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center mt-10">
        <p className="text-[#9f3941] font-popins font-bold text-4xl">
          Thanks for joining!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-center">
          <h1 className="text-black font-bold text-2xl"> Contact Us</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto md:mt-8 mt-6 md:pt-10 pt-5 md:px-0 px-2  "
          action="https://formspree.io/f/mvoekavb"
          method="POST"
        >
          <div className="mb-6">
            <label
              htmlFor="Name"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
focus:outline-none focus:shadow-outline"
              placeholder="enter your name"
            />
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your email address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm italic"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              placeholder="Your message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm italic"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

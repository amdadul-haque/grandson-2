"use client";

import React, { useEffect } from "react";

// framer motion
import { useAnimation, motion } from "framer-motion";

// intersection observer
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  // intersection observer
  const { ref, inView } = useInView({ threshold: 0.2 });

  // animation
  const animation = useAnimation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/contact/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("data", data);
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
        },
      });
    } else {
      animation.start({
        opacity: 0,
        scale: 0.5,
      });
    }
  }, [inView]);

  return (
    <div
      id="kontakt"
      ref={ref}
      className="bg-[#000000] w-full mx-auto flex justify-between  items-center flex-col gap-16 py-12 1040px:py-24 1040px:px-0 400px:px-12 px-6"
    >
      {/* <div className="text-[#fff] w-[50%] text-center ">
        <h1 className="font-extrabold text-[1.5rem] mb-6">
          A CREATIVE STUDIO IN MELBOURNE, PASSIONATE ABOUT DESIGN, ART AND
          CREATIVITY, SINCE 1950.
        </h1>
        <button className="py-4 px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464] transition-colors duration-300">
          CONTACT WITH US
        </button>
      </div> */}

      <motion.div animate={animation} className="text-[#fff] 1040px:w-[50%]">
        <h1 className="font-extrabold text-[1rem] 400px:text-[1.5rem] mb-6">
          Masz pomysł na kreatywną kampanię lub szukasz inspiracji?
          Połączmy siły i stwórzmy coś wyjątkowego!
        </h1>
        <form>
          <div className="flex items-center gap-8 1040px:flex-row 400px:flex-row flex-col">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full text-[0.8rem] 400px:text-[1rem] py-3 bg-[#000] border-b border-[#464545] text-[#fff] outline-none"
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full py-3 text-[0.8rem] 400px:text-[1rem] bg-[#000] border-b border-[#464545] text-[#fff] outline-none"
            />
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              cols="30"
              placeholder="Message"
              className="w-full mt-8 text-[0.8rem] 400px:text-[1rem] py-3 h-[120px] bg-[#000] border-b border-[#464545] text-[#fff] outline-none"
              rows="10"
            ></textarea>
          </div>

          <div className="mt-8">
            <button className="400px:py-4 px-4 py-2 400px:px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464]  transition-colors duration-300">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;

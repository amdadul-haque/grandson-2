import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#000000] w-full max-w-[1300px] mx-auto flex justify-between font-oswald items-center flex-col gap-16 py-12 1040px:py-24 1040px:px-0 400px:px-12 px-6">
      {/* <div className="text-[#fff] w-[50%] text-center ">
        <h1 className="font-extrabold text-[1.5rem] mb-6">
          A CREATIVE STUDIO IN MELBOURNE, PASSIONATE ABOUT DESIGN, ART AND
          CREATIVITY, SINCE 1950.
        </h1>
        <button className="py-4 px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464] transition-colors duration-300">
          CONTACT WITH US
        </button>
      </div> */}

      <div className="text-[#fff] 1040px:w-[50%]">
        <h1 className="font-extrabold text-[1rem] 400px:text-[1.5rem] mb-6">
          LET'S WORK TOGETHER PROJECTS JUST SEND ME EMAIL HERE
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
              rows="10"></textarea>
          </div>

          <div className="mt-8">
            <button className="400px:py-4 px-4 py-2 400px:px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464]  transition-colors duration-300">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#050505] w-full 1040px:px-0 400px:px-12 px-6 max-w-[1300px] mx-auto flex justify-between font-oswald items-center 1040px:flex-row flex-col 1040px:py-0 py-12 gap-16">
      <div className="text-[#fff] 1040px:pl-24">
        <h1 className="400px:text-[2rem] text-[1.5rem] font-bold ">ABOUT US</h1>
        <p className="400px:my-10 my-6 text-[0.8rem]  400px:text-[1rem] ">
          I’m a Graphic Designer and I make things work.without cross-media
          value. Quickly maximize timely deliverables for real-time schemas.
          Dramatically maintain clicks-and-mortar solutions without functional
          solutions.
          <br />
          <br />
          Completely synergize resource taxing relationships premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>

        <button className="400px:py-4 px-4 py-2 400px:px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464] transition-colors duration-300">
          SEE OUR WORKS
        </button>
      </div>

      <img
        src="https://html.dynamiclayers.net/it/alison/img/about-background.jpg"
        alt="about-background"
        className="w-full  1040px:w-[600px]"
      />
    </div>
  );
};

export default AboutUs;

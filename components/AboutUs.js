import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#050505] w-full max-w-[1300px] mx-auto flex justify-between font-oswald items-center gap-16">
      <div className="text-[#fff] pl-24">
        <h1 className="text-[2rem] font-bold ">ABOUT US</h1>
        <p className="my-10 text-[1rem]">
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

        <button className="py-4 px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464] transition-colors duration-300">
          SEE OUR WORKS
        </button>
      </div>

      <img
        src="https://html.dynamiclayers.net/it/alison/img/about-background.jpg"
        alt="about-background"
        className="w-[600px]"
      />
    </div>
  );
};

export default AboutUs;

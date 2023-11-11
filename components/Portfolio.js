import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-[#000000] w-full max-w-[1300px] mx-auto flex justify-between font-oswald items-center gap-16 py-24">
      <div className="text-[#fff] pl-24 w-[35%]">
        <h1 className="text-[2rem] font-bold ">PORTFOLIO</h1>
        <p className="my-5 text-[1rem]">
          I’m a Creative Designer and I make things work.
          <br />
          Turning your dreams into reality.
        </p>
        <button className="py-4 px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464] transition-colors duration-300">
          OUR ALL WORKS
        </button>
      </div>

      <div className="grid grid-cols-3 w-[65%]">
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-1.jpg"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-2.jpg"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-3.gif"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-4.jpg"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-5.jpg"
          alt="img"
        />
        <img
          src="https://html.dynamiclayers.net/it/alison/img/prtf-6.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Portfolio;

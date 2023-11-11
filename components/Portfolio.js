import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-[#000000] w-full max-w-[1300px] mx-auto flex justify-between font-oswald 1040px:flow-row flex-col items-center gap-16 py-12 1040px:py-24">
      <div className="text-[#fff] 1040px:px-0 400px:px-12 px-6 1040px:pl-24 1040px:w-[35%] 1040px:text-start text-center">
        <h1 className="text-[1.5rem] 400px:text-[2rem] font-bold ">
          PORTFOLIO
        </h1>
        <p className="my-5 text-[0.8rem] 400px:text-[1rem]">
          I’m a Creative Designer and I make things work.
          <br />
          Turning your dreams into reality.
        </p>
        <button className="400px:py-4 px-4 py-2 400px:px-8 bg-[#fff] text-[#000] text-[0.8rem] font-bold hover:bg-[#f16464] transition-colors duration-300">
          OUR ALL WORKS
        </button>
      </div>

      <div className="grid 400px:grid-cols-3 grid-cols-1  1040px:grid-cols-3 1040px:w-[65%]">
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

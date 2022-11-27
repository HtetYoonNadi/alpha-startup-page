import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="w-screen h-screen justify-center items-center flex bg-primary font-Poppins">
    <div className=" flex flex-col items-center">
      <h1 className="z-[10px] mt-[-30px] text-[56px] font-extrabold text-center text-secondary justify-center ">
        We're Coming Soon!
      </h1>
      <p className="z-[10px] mt-2 text-center text-secondary justify-center font-extralight">
        We're working hard to improve our website <br />
        and we'll ready to lunch after
      </p>
      <div className="flex items-center mt-8 ">
        <input
          className="box-border border-tertiary bg-tertiary text-black py-2 px-6 mx-5 mr-[-4px] rounded-xl"
          type="email"
          placeholder="your email"
        />
        <button
          className="border-solid border border-tertiary bg-tertiary text-white font-light hover:text-tertiary hover:bg-white
          rounded-[10px] py-2 px-6 mx-5 transition-transform duration-[80ms] ease-in"
        >
          Notify Me
        </button>
      </div>
    </div>
  </div>
);

import React from 'react';

const Join = () => {
  return (
    <div className="bg-gray-100 w-full flex justify-center items-center py-8">
      <div className="bg-white max-w-screen-xl w-full h-auto px-6 py-8 md:px-[80px] md:py-[60px] flex flex-col items-center justify-center rounded-lg shadow-md">
        <h1 className="font-clash-display font-normal text-[30px] sm:text-[28px] md:text-[36px] text-center text-darkPrimary">
          Join the club and get the benefits
        </h1>

    
        <p className="font-satoshi text-[14px] sm:text-[16px] text-center text-darkPrimary mt-4 leading-[1.6]">
          Sign up for our newsletter and receive exclusive offers on new <br className="hidden sm:block" />
          ranges, sales, pop-up store events, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center mt-8 gap-4 sm:gap-0 border">
          <input
            type="email"
            placeholder="your@email.com"
            className="p-4 bg-[#F9F9F9] w-full md:w-[354px] h-[56px] outline-none mb-2 md:mb-0"
          />
          <button className="bg-[#2A254B] text-white w-full sm:w-[120px] h-[56px] flex items-center justify-center font-satoshi rounded-md sm:rounded-none">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;




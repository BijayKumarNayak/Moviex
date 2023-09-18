import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center text-center bg-gradient-to-b from-slate-700 to-slate-800 py-16">
      <div className="w-3/4 lg:w-2/4 ">
        <ul className="flex flex-row md:flex-row lg:flex-row  items-center justify-evenly text-white font-semibold mb-4 flex-wrap ">
          <li className="cursor-pointer hover:text-blue-400 mb-2">Term Of Use</li>
          <li className="cursor-pointer hover:text-blue-400 mb-2">Privacy Policy</li>
          <li className="cursor-pointer hover:text-blue-400 mb-2">About</li>
          <li className="cursor-pointer hover:text-blue-400 mb-2">Blog</li>
          <li className="cursor-pointer hover:text-blue-400 mb-2">FAQ</li>
        </ul>
        <p className="text-white mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          facilis impedit nihil, ullam enim esse autem iste omnis tempora
          ducimus! Blanditiis obcaecati at iusto esse eos saepe soluta veniam
          vitae.
        </p>
        <div className="flex items-center justify-evenly lg:w-2/4 m-auto text-white mb-4 ">
          <i className="fa-brands fa-instagram text-2xl cursor-pointer hover:text-red-400 hover:scale-125 "></i>
          <i className="fa-brands fa-facebook text-2xl cursor-pointer hover:text-blue-400 hover:scale-125"></i>
          <i className="fa-brands fa-twitter text-2xl cursor-pointer hover:text-blue-600 hover:scale-125"></i>
          <i className="fa-brands fa-youtube text-2xl cursor-pointer hover:text-red-500 hover:scale-125"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;

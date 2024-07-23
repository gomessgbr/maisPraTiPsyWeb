import { useState } from "react";
import chevronUp from '/images/chevron-up.svg'
import chevronDown from '/images/chevron-down.svg'

export function Accordion({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="border-y border-primary max-w-5xl ">
        <button
          className=" flex items-center w-full p-4 font-semibold text-left rounded-t-md transition-all ease-in-out focus:outline-none"
          onClick={toggleAccordion}
        >
          <span className="text-white font-montserratBold">{title}</span>
          <img
            className={`ml-auto text-xs transition-transform duration-300`}
            src={isOpen ? chevronUp : chevronDown }
          />
        </button>
        <div
          className={`p-2.5 overflow-hidden transition-max-height duration-300 ease-in-out ${
            isOpen ? "grid" : "hidden"
          }`}
        >
          <div className="p-4 text-sm leading-normal text-white font-montserrat">
            {description}
          </div>
        </div>
      </div>
    </>
  );
}

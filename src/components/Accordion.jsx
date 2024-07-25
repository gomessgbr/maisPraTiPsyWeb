import { useState } from "react";
import chevronUp from "/images/chevron-up.svg";
import chevronDown from "/images/chevron-down.svg";

export function Accordion({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full max-w-full border-y border-primary  overflow-hidden">
      <button
        className="flex  items-center min-w-full p-4 font-semibold text-left rounded-t-md transition-all ease-in-out focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-white font-montserratBold">{title}</span>
        <img
          className={`ml-auto text-xs transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          src={isOpen ? chevronUp : chevronDown}
        />
      </button>
      <div
        className={`  p-2.5 transition-all duration-300 ease-in-out  ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="p-4 text-sm leading-normal text-white font-montserrat">
          {description}
        </p>
      </div>
    </div>
  );
}

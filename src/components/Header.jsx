import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center justify-between py-7 px-12 bg-black text-primary">
      <Link to="/" className="font-alegreyaBold text-5xl">
        PsyWeb
      </Link>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-primary focus:outline-none"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute bg-black p-8 right-0 z-10 top-20 flex-col gap-8 font-montserratBold lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0 lg:gap-8`}
      >
        <li>
          <Link to="/consult" className="hover:text-accent">
            Encontre um psicologo
          </Link>
        </li>
        <li>
          <Link to="/habits" className="hover:text-accent">
            Hábitos
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-accent">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

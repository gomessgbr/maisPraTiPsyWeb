import {Link} from 'react-router-dom'

export function Header() {
  return (
    <nav className="flex flex-1 items-center justify-between py-7 px-12  bg-black text-primary">
      <Link to='/' className="font-alegreyaBold text-5xl ">
        PsyWeb
      </Link>
      <ul className="flex gap-8 font-montserratBold">
        <li>
          <Link to='consult' className="hover:text-accent">
            Encontre um psicologo
          </Link>
        </li>
        <li>
          <Link to="contact" className="hover:text-accent">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

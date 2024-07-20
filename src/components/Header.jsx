export function Header() {
  return (
    <nav className="flex flex-1 items-center justify-between py-7 px-12  bg-black text-primary">
      <a href="index.html" className="font-alegreyaBold text-5xl ">
        PsyWeb
      </a>
      <ul className="flex gap-2 font-montserratBold">
        <li>
          <a href="./consult.html">Encontre um psicologo</a>
        </li>
        <li>
          <a href="./contact.html">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

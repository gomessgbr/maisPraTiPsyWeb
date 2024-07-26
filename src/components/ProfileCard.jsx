import anaJuliaImage from "../../public/images/ana-silva.jpg";

export function ProfileCard({ profileImg, about, phone, crp, name, approach }) {
  return (
    <div className="max-w-[1024px] m-auto">
      <div className=" grid shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-9 my-10 mx-10">
        <div className="flex gap-8 ">
          <img
            className="rounded-full w-[180px] h-[180px] object-cover"
            src={anaJuliaImage}
            alt="foto da ana julia"
          />

          <div>
            <div>
              <span className="flex justify-between">
                <p>Ana Silva</p>
                <p>CRP:06/123456</p>
              </span>
              <span>Abordagem: Terapia Cognitiva-Comportamental</span>
            </div>
            <span>
              <strong>Sobre mim</strong>
              <p>
                Psicóloga com 10 anos de experiência em terapia
                cognitivo-comportamental, especializada em tratamento de
                ansiedade e depressão.
              </p>
            </span>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone5511975950915&text=Olá! Gostaria de fazer terapia com você"
                target="_blank"
              >
                {" "}
                Quero me consultar
              </a>
              <span className="block mt-2">Telefone: (11) 98765-4321</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

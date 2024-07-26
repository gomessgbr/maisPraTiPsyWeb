

export function ProfileCard({ profileImg, about, phone, crp, name, approach }) {
  return (
    <div className=" max-w-[1024px] m-auto">
      <div className=" grid shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] rounded-md p-9 my-10 mx-10">
        <div className="grid grid-cols-[auto_1fr] gap-8">
          <img
            className="rounded-full w-[180px] h-[180px] object-cover"
            src={profileImg}
            alt="foto de perfil do profissional psicológo"
          />

          <div>
            <div className="grid gap-2 mb-4">
              <span className="flex justify-between ">
                <p className="font-montserratBold text-2xl">{name}</p>
                <p className="font-semibold">CRP:{crp}</p>
              </span>
              <span>
                <strong>Abordagem:</strong> {approach}
              </span>
            </div>
            <span>
              <strong>Sobre mim</strong>
              <p>{about}</p>
            </span>
            <div className="flex flex-row-reverse justify-between place-items-center mt-2">
              <a
                href={`https://api.whatsapp.com/send?phone${phone}5&text=Olá! Gostaria de fazer terapia com você`}
                target="_blank"
                className="bg-[#34AF23] text-[#FFF] font-semibold p-[1em] rounded-[16px]"
              >
                Quero me consultar
              </a>
              <span className="block mt-2">Telefone: {phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

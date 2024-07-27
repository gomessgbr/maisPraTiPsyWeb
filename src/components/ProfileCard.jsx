export function ProfileCard({ profileImg, about, phone, crp, name, approach }) {
  return (
    <div className="max-w-[1024px] m-auto my-4">
      <div className="shadow-md rounded-md p-4 sm:p-8 grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
          <img
            className="rounded-full w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] object-cover"
            src={profileImg}
            alt="foto de perfil do profissional psicológo"
          />
          <div className="flex flex-col justify-between">
            <div className="grid gap-2 mb-4">
              <span className="flex justify-between">
                <p className="font-montserratBold text-xl sm:text-2xl">
                  {name}
                </p>
                <p className="font-semibold">CRP: {crp}</p>
              </span>
              <span>
                <strong>Abordagem:</strong> {approach}
              </span>
            </div>
            <span>
              <strong>Sobre mim</strong>
              <p>{about}</p>
            </span>
            <div className="flex flex-col sm:flex-row-reverse justify-between place-items-center mt-2">
              <a
                href={`https://api.whatsapp.com/send?phone=${phone}&text=Olá! Gostaria de fazer terapia com você`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#34AF23] text-[#FFF] font-semibold p-2 rounded-md mt-4 sm:mt-0"
              >
                Quero me consultar
              </a>
              <span className="block mt-2 sm:mt-0">Telefone: {phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

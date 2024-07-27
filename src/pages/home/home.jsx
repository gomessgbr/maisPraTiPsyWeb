import { Link } from "react-router-dom";
import { Accordion } from "./components/Accordion";
import { useGetTherapyTypes } from "./hooks/useGetTherapyTypes";
import panelImage from "/images/panelImage.jpg";

export function Home() {
  const { therapies } = useGetTherapyTypes();

  return (
    <>
      <div className="relative">
        <img
          src={panelImage}
          alt="amigos sorrindo em um fundo vazios"
          className="object-cover w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]"
        />
        <div className="grid gap-4 absolute bottom-0 py-8 px-4 sm:px-20 md:px-32 lg:px-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserratBold text-white">
            Terapia Online!
          </h1>
          <Link
            to="/consult"
            className="bg-primary w-max p-2 rounded-md hover:bg-accent"
          >
            Marcar uma conversa inicial
          </Link>
        </div>
      </div>
      <main>
        <div className="grid gap-4 px-4 sm:px-20 md:px-32 lg:px-40 py-10 sm:py-20">
          <span className="text-2xl sm:text-3xl md:text-4xl font-montserratBold">
            Como funciona terapia online?
          </span>
          <p>
            A terapia online é uma modalidade de atendimento psicológico ou
            psicoterapêutico realizada através de plataformas digitais, como
            videochamadas, chats ou até mesmo trocas de e-mails.
          </p>
          <span className="text-2xl sm:text-3xl md:text-4xl font-montserratBold">
            Primeiros passos
          </span>
          <p>
            <strong>Escolha do terapeuta e abordagem:</strong> O primeiro passo
            é escolher um terapeuta que ofereça serviços online. Muitos
            profissionais de saúde mental listam essa opção em seus sites ou em
            plataformas especializadas. Existem várias abordagens terapêuticas
            disponíveis, como terapia cognitivo-comportamental, psicanálise,
            terapia humanista, entre outras, cada uma com suas próprias técnicas
            e métodos.
          </p>
          <p>
            <strong>Agendamento de Sessões:</strong> As sessões são agendadas de
            forma similar à terapia presencial. O cliente e o terapeuta combinam
            um horário que seja conveniente para ambos.
          </p>
        </div>
        <div className="bg-black grid place-content-center py-10 sm:py-20 px-4 sm:px-20 md:px-32 lg:px-40">
          <span className="font-montserratBold text-2xl sm:text-3xl md:text-4xl text-white pb-5 sm:pb-10">
            Tipos de abordagens
          </span>

          {therapies.length > 0 &&
            therapies.map(({ name, description }, index) => (
              <Accordion
                key={`${index}+${name}`}
                title={name}
                description={description}
              />
            ))}
        </div>
      </main>
    </>
  );
}

import { Accordion } from "../../components";
import { useGetTherapyTypes } from "./hooks/useGetTherapyTypes";
import panelImage from "../../../public/images/panelImage.jpg"

export function Home() {
  const { therapies } = useGetTherapyTypes();

  return (
    <>
      <div className="relative">
        <img
          src={panelImage}
          alt="amigos sorrindo em um fundo vazios"
          className="object-cover w-full max-h-[500px]"
        />
        <div className="grid gap-4 absolute bottom-0 py-8 px-40">
          <h1 className="text-6xl font-montserratBold text-white">Terapia Online!</h1>
          <a href="./consult.html" className="bg-primary w-max p-2 rounded-md hover:bg-accent">Marcar uma conversa inicial inicial</a>
        </div>
      </div>
      <main>
        <div className="grid gap-4 px-80 py-20">
          <span className="text-4xl font-montserratBold">Como funciona terapia online ?</span>
          <p>
            A terapia online é uma modalidade de atendimento psicológico ou
            psicoterapêutico realizada através de plataformas digitias, como
            videochamadas, chats ou até mesmo trocas de e-mails.
          </p>
          <span className="text-4xl font-montserratBold">Primeiros passos</span>
          <p>
            <strong>Escolha do terapeuta e abordagem:</strong>O primeiro passo é
            escolher um terapeuta que ofereça serviços online. Muitos
            profissionais de saúde mental listam essa opção em seus sites ou em
            plataformas especializadas. Existem várias abordagens terapêuticas
            disponíveis, como terapia cognitivo-comportamental, psicanálise,
            terapia humanista, entre outras, cada uma com suas próprias técnicas
            e métodos.
          </p>
          <p>
            <strong>Agendamento de Sessões:</strong>
            As sessões são agendadas de forma similar à terapia presencial. O
            cliente e o terapeuta combinam um horário que seja conveniente para
            ambos.
          </p>
        </div>
        <div className="bg-black grid place-content-center py-20 px-80">
          <span className="font-montserratBold text-4xl text-white pb-10">
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

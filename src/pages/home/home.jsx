import { Accordion } from "../../components/Accordion";
import { useGetTherapyTypes } from "./hooks/useGetTherapyTypes";

export function Home() {
  const { therapies } = useGetTherapyTypes();

  console.log(therapies);
  return (
    <>
      <div className="panel">
        <img
          src="./assets/images/pexels-wildlittlethingsphoto-708440.jpg"
          alt=""
        />
        <div className="panelTextArea">
          <h1 className="text-6xl font-montserratBold">Terapia Online!</h1>
          <a href="./consult.html">Marcar uma conversa inicial inicial</a>
        </div>
      </div>
      <main>
        <div className="therapyArea">
          <span className="title">Como funciona terapia online ?</span>
          <p>
            A terapia online é uma modalidade de atendimento psicológico ou
            psicoterapêutico realizada através de plataformas digitias, como
            videochamadas, chats ou até mesmo trocas de e-mails.
          </p>
          <span className="title">Primeiros passos</span>
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
        <div className="bg-black grid place-content-center">
          <span className="font-montserratBold text-4xl text-white">
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

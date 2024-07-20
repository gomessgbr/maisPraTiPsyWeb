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
          <span className="font-montserratBold text-4xl text-white">Tipos de abordagens</span>

          {therapies.length > 0 &&
            therapies.map(({ name, description }, index) => (
              <Accordion
                key={`${index}+${name}`}
                title={name}
                description={description}
    
              />
            ))}

          {/* <ul>
            <li>
              <button type="button" className="accordion" id="accord">
                <span>Terapia Cognitivo-Comportamental (TCC)</span>
                <img
                  className="icon"
                  src="./assets/images/chevron-down.svg"
                  alt=""
                />
              </button>
              <div className="panelAccord" id="panelAccord">
                <p>
                  Focada em identificar e mudar padrões de pensamento negativos
                  e comportamentos disfuncionais.
                </p>
              </div>
            </li>
            <li>
              <button type="button" className="accordion" id="accord">
                <span>Psicanálise</span>
                <img
                  className="icon"
                  src="./assets/images/chevron-down.svg"
                  alt=""
                />
              </button>
              <div className="panelAccord" id="panelAccord">
                Explora os pensamentos e sentimentos inconscientes, muitas vezes
                relacionando experiências passadas e sua influência no
                comportamento atual.
              </div>
            </li>
            <li>
              <button type="button" className="accordion" id="accord">
                <span>Terapia Humanista</span>
                <img
                  className="icon"
                  src="./assets/images/chevron-down.svg"
                  alt=""
                />
              </button>
              <div className="panelAccord" id="panelAccord">
                Centrada no desenvolvimento pessoal e na realização do potencial humano, enfatizando a empatia e a aceitação incondicional.
              </div>
            </li>
            <li>
              <button type="button" className="accordion" id="accord">
                <span>Terapia Comportamental</span>
                <img
                  className="icon"
                  src="./assets/images/chevron-down.svg"
                  alt=""
                />
              </button>
              <div className="panelAccord" id="panelAccord">
                Foca na mudança de comportamentos específicos através de técnicas de condicionamento e reforço.
              </div>
            </li>
            <li>
              <button type="button" className="accordion" id="accord">
                <span>Terapia Gestalt</span>
                <img
                  className="icon"
                  src="./assets/images/chevron-down.svg"
                  alt=""
                />
              </button>
              <div className="panelAccord" id="panelAccord">
                Enfatiza a consciência e a experiência presente, incentivando os clientes a perceber e entender seus sentimentos e comportamentos no momento.
              </div>
            </li>
            <li>
              <button type="button" className="accordion" id="accord">
                <span>Terapia Sistêmica</span>
                <img
                  className="icon"
                  src="./assets/images/chevron-down.svg"
                  alt=""
                />
              </button>
              <div className="panelAccord" id="panelAccord">
                Examina as interações dentro de sistemas familiares e sociais, focando nas dinâmicas de relacionamento e comunicação.
              </div>
            </li>
            <li>
              <button type="button" className="accordion" id="accord">
                <span>Terapia de Aceitação e Compromisso (ACT)</span>
                <img
                  className="icon"
                  src="./assets/images/chevron-down.svg"
                  alt=""
                />
              </button>
              <div className="panelAccord" id="panelAccord">
                Combina técnicas de mindfulness com estratégias de mudança de comportamento, ajudando os clientes a aceitar seus pensamentos e sentimentos enquanto se comprometem com ações alinhadas com seus valores.
              </div>
            </li>
            <li>
              <button type="button" className="accordion" id="accord">
                <span>Terapia Dialética Comportamental (TDC)</span>
                <img
                  className="icon"
                  src="./assets/images/chevron-down.svg"
                  alt=""
                />
              </button>
              <div className="panelAccord" id="panelAccord">
                Uma forma de TCC que inclui técnicas de mindfulness e é usada principalmente para tratar transtornos de personalidade borderline.
              </div>
            </li>
            <li>
              <button className="accordion" id="accord">
                <span>Terapia Narrativa</span>
                <img
                  className="icon"
                  src="./assets/images/chevron-down.svg"
                  alt=""
                />
              </button>
              <div className="panelAccord" id="panelAccord">
                Ajuda os clientes a reescrever suas histórias pessoais, focando em como as narrativas pessoais influenciam a identidade e o comportamento.
              </div>
            </li>
          </ul> */}
        </div>
      </main>
    </>
  );
}

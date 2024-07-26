const psychologyProfessionals  = [
  {
    name: "Ana Silva",
    CRP: "06/123456",
    approach: "Terapia Cognitivo-Comportamental",
    contact: "(11) 98765-4321",
    aboutMe: "Psicóloga com 10 anos de experiência em terapia cognitivo-comportamental, especializada em tratamento de ansiedade e depressão.",
    profilePicture: "./assets/images/ana-silva.jpg"
  },
  {
    name: "Carlos Pereira",
    CRP: "07/654321",
    approach: "Psicanálise",
    contact: "(21) 98765-4321",
    aboutMe: "Psicanalista com 15 anos de prática clínica, focado em terapia de longo prazo para questões de identidade e relacionamentos.",
    profilePicture: "./assets/images/carlos-pereira.jpg"
  },
  {
    name: "Beatriz Santos",
    CRP: "05/112233",
    approach: "Terapia Humanista",
    contact: "(31) 98765-4321",
    aboutMe: "Especialista em terapia humanista, atuando há 8 anos com foco no desenvolvimento pessoal e autoconhecimento.",
    profilePicture: "./assets/images/beatriz-santos.jpg"
  },
  {
    name: "João Almeida",
    CRP: "08/445566",
    approach: "Terapia Comportamental",
    contact: "(41) 98765-4321",
    aboutMe: "Psicólogo comportamental com experiência em tratamento de transtornos alimentares e compulsões, com 12 anos de atuação.",
    profilePicture: "./assets/images/joao-almeida.jpg"
  }
];

let data = psychologyProfessionals;


document.addEventListener('DOMContentLoaded',() => {
  renderCards(data);

  let searchForm = document.getElementById('searchForm');
  let searchInput = document.getElementById('searchInput');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formatedInputValue = searchInput.value.toLowerCase();
    let filteredData;
        if (formatedInputValue === '') {
            filteredData = psychologyProfessionals; 
        } else {
            filteredData = data.filter(({ name }) => name.toLowerCase().includes(formatedInputValue));
        }
        renderCards(filteredData);
  });

  searchInput.addEventListener('input', (e) => {
    const formatedInputValue = e.target.value.toLowerCase();
    let filteredData;
    if (formatedInputValue === '') {
        filteredData = psychologyProfessionals;
    } else {
        filteredData = data.filter(({ name }) => name.toLowerCase().includes(formatedInputValue));
    }
    renderCards(filteredData);
  });
});


function renderCards(data){
  let cardsContainer = document.getElementById('cardsContainer');
  let cardsHTML = '';
  data.forEach(pro => {
    cardsHTML +=`
      <div class="card">
        <div class="personalInfos">
          <img src=${pro.profilePicture}  alt="">
          <div class="infosArea">
            <div>
              <span>${pro.name}</span>
              <span>CRP:${pro.CRP}</span>
            </div>
            <p><strong>Abordagem :</strong> ${pro.approach}</p>
          </div>
        </div>
        <div class="aboutMeContainer">
          <strong>Sobre mim :</strong>
          <div class="resumeArea">
            <p>${pro.aboutMe}</p>
          </div>
          <div class="contactArea">
            <a href="https://api.whatsapp.com/send?phone=5511975950915&text=Olá! Gostaria de fazer terapia com você!" target="_blank">Quero me consultar</a>
            <p>Telefone: ${pro.contact}</p>
          </div>
        </div>
      </div>
    `;
  });
  cardsContainer.innerHTML = cardsHTML;
}


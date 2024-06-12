let accordion = document.getElementsByClassName('accordion')
let panel = document.getElementsByClassName('panelAccord');
let icon = document.getElementsByClassName('icon');

for(let i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', () => {
    if(panel[i].style.display.includes('block')){
      panel[i].style.display = 'none';
      return icon[i].src='./assets/images/chevron-down.svg'
    }
    icon[i].src='./assets/images/chevron-up.svg'
    return panel[i].style.display = "block";
  })

}

// -----------------------------  form Setup


let formElement = document.getElementById('contactForm');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const textAreaMessage = document.getElementById('textAreaMessage');


formElement.addEventListener('submit', (event)=>{
  event.preventDefault();
  new FormData(formElement);
})


inputName.addEventListener('invalid',(e)=>{
  inputName.style.borderColor= '#FF5757';

})

inputEmail.addEventListener('invalid',(e)=>{
  inputEmail.style.borderColor= '#FF5757';
})

formElement.addEventListener('formdata',(e)=>{
  let data = e.formData;
  let nameInputData = data.get('fieldName')
  alert(`Sua mensagem foi enviado ${nameInputData}!`);
  formElement.reset();

})
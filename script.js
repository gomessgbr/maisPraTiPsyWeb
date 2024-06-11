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

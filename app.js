const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");
const luckyEl = document.querySelector(".lucky")
const modal = document.querySelector(".modal")
const openModal = document.querySelector("#openPolicyBtn")
const closeModal = document.querySelector(".close")
const resetData = document.querySelector(".reset-btn")


checkBtn.addEventListener('click', luckCheck);
resetData.addEventListener('click',()=>{
    luckyEl.style.display = "none";
    displayMessage.innerHTML = '';
})


function luckCheck(e) {
    e.preventDefault()
    luckyEl.style.display = "none"
     const dobSum = calculateDOB()
     const luckyNum = luckyNumber.value;
     console.log(dobSum, luckyNum)
     if(luckyNum && dobSum){
         dobSum % luckyNum === 0 ? lucky() : notLucky() 
     }
     else{
        displayMessage.innerHTML = "<q>Please enter valid lucky number or date</q>"
     }
}

function calculateDOB(){
    const date = dateOfBirth.value.replaceAll("-","")
    let sum = 0
     for(let i = 0; i<date.length; i++ ){
         sum += Number(date[i])
     }
     return sum
}
// functions to generate the lucky or unlucky text/animation on the screen
function lucky(){
    displayMessage.innerHTML = `<q>Yay!! 😊 <b>${luckyNumber.value}</b> is a lucky number</q>`
    luckyEl.style.display = "block"
}

function notLucky(){
    displayMessage.innerHTML = `<q>Sorry to say <b>${luckyNumber.value}</b> isn't lucky 😕</q>`
}



// Modal functionality
openModal.addEventListener("click",() =>{
    modal.style.display = "block";
})
closeModal.addEventListener("click",() =>{
    modal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

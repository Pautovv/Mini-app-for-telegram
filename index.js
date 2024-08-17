let coin = document.querySelector('.balance-text')
let energy = document.querySelector('.energy-text')
let parsedcoin = parseFloat(coin.innerHTML)
let parsedenergy =parseFloat(energy.innerHTML)

let CoinImgContainer = document.querySelector('.parrot')

let gpc = 1
let gps = 0

function tup(){
   coin.innerHTML = Math.round(parsedcoin += gpc) 
   energy.innerHTML = Math.round(parsedenergy -= gpc)
   const x = event.offsetX
   const y = event.offsetY

   const div = document.createElement('div')
   div.innerHTML = `+${Math.round(gpc)}`
   div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
   CoinImgContainer.appendChild(div)

   div.classList.add('fade-up')

   timeout(div)
}

const timeout = (div) => {
   setTimeout(() => {
       div.remove()
   }, 800)
}

let modal = document.getElementById('info-inf')
let img = document.getElementById('info-click')
let sp = document.getElementsByClassName('i-i-close')[0];

img.onclick = function(){
   modal.style.display = 'block';
}
sp.onclick = function(){
   modal.style.display = 'none';
}
window.onclick = function(event){
   if (event.target == modal){
      modal.style.display = 'none';
   }
}


var modal2 = document.getElementById("earn-ear");
var img1 = document.getElementById("ear");
var img2 = document.getElementById("daily-bonus-click");
var closeBtn = document.getElementsByClassName("e-e-close")[0];

function openModal() {
    modal2.style.display = "block";
}
function closeModal() {
    modal2.style.display = "none";
}

img1.addEventListener("click", openModal);
img2.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
    if (event.target == modal2) {
        closeModal();
    }
});

let modal3 = document.getElementById('friends-fri')
let img3 = document.getElementById('frie')
let sp3 = document.getElementsByClassName('f-f-close')[0];

img3.onclick = function(){
   modal3.style.display = 'block';
}
sp3.onclick = function(){
   modal3.style.display = 'none';
}
window.onclick = function(event){
   if (event.target == modal3){
      modal3.style.display = 'none';
   }
}

let modal4 = document.getElementById('mine-min')
let img4 = document.getElementById('mini')
let sp4 = document.getElementsByClassName('m-m-close')[0];

img4.onclick = function(){
   modal4.style.display = 'block';
}
sp4.onclick = function(){
   modal4.style.display = 'none';
}
window.onclick = function(event){
   if (event.target == modal4){
      modal4.style.display = 'none';
   }
}


const upgrades = [
   {
       name: 'p2000',
       cost: document.querySelector('.upg1-cost'),
       parsedCost: parseFloat(document.querySelector('.upg1-cost').innerHTML),
       level: document.querySelector('.upg1-level'),
       increase: document.querySelector('.upg1-increase'),
       parsedIncrease: parseFloat(document.querySelector('.upg1-increase').innerHTML),
       goulMultiplier: 1.025,
       costMultiplier: 1.12,
   }
]

function buyUpgrade(upg1){
   const mu = upgrades.find((u) =>{
       if (u.name === upg1) return u
   })

   if (parsedcoin >= mu.parsedCost){
       goul.innerHTML = Math.round(parsedcoin -= mu.parsedCost)

       mu.level.innerHTML ++
       mu.parsedCost *= mu.costMultiplier
       mu.cost.innerHTML =  Math.round(mu.parsedCost)

       mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.goulMultiplier).toFixed(2))
       mu.increase.innerHTML = mu.parsedIncrease

       if (mu.name === 'p2000'){
           gpc += mu.parsedIncrease
       } else{
           gps += mu.parsedIncrease
       }
   }
}
let coin = document.querySelector('.balance-text')
let energy = document.querySelector('.energy-text')
let parsedcoin = parseFloat(coin.innerHTML)
let parsedenergy =parseFloat(energy.innerHTML)

let CoinImgContainer = document.querySelector('.parrot')
let leveltext = document.querySelector('.level-text')

let gpc = 1
let gps = 0
let gps2 = 0
let gps3 = 0

function tup(){
   coin.innerHTML = Math.round(parsedcoin += gpc) 
   energy.innerHTML = Math.round(parsedenergy -= 1)
   if (parsedcoin==2000){
      leveltext.innerHTML = 'Silver'
   }
   if (parsedcoin==4000){
      leveltext.innerHTML = 'Gold'
   }
   if (parsedcoin==6000){
      leveltext.innerHTML = 'Platinum'
   }
   if (parsedcoin==8000){
      leveltext.innerHTML = 'Diamond'
   }
   if (parsedcoin==10000){
      leveltext.innerHTML = 'Legend'
   }
   const x = event.offsetX
   const y = event.offsetY

   const div = document.createElement('div')
   div.innerHTML = `+${Math.round(gpc)}`
   div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 23px; font-weight: bolder; pointer-events: none;`
   CoinImgContainer.appendChild(div)

   div.classList.add('fade-up')

   timeout(div)
}

const timeout = (div) => {
   setTimeout(() => {
       div.remove()
   }, 800)
}

let level1 = document.querySelector('.pistol-level')
let parsedlevel1 = parseFloat(level1.innerHTML)

let cost1 = document.querySelector('.pistol-cost')
let parsedcost1 = parseFloat(cost1.innerHTML)

function buyUpgrade(){
   if (parsedcoin >= parsedcost1){
      gpc+=1
      level1.innerHTML = Math.round(parsedlevel1 += 1)
      coin.innerHTML = Math.round(parsedcoin -= parsedcost1)
      cost1.innerHTML = Math.round(parsedcost1 += 5)

   }
}

let level2 = document.querySelector('.pp-level')
let parsedlevel2 = parseFloat(level2.innerHTML)

let cost2 = document.querySelector('.pp-cost')
let parsedcost2 = parseFloat(cost2.innerHTML)

function buyUpgrade2(){
   if (parsedcoin >= parsedcost2){
      gps += 24
      level2.innerHTML = Math.round(parsedlevel2 +=1)
      coin.innerHTML = Math.round(parsedcoin -= parsedcost2)
      cost2.innerHTML = Math.round(parsedcost2 += 50)
   }
}

let level3 = document.querySelector('.kalash-level')
let parsedlevel3 = parseFloat(level3.innerHTML)

let cost3 = document.querySelector('.kalash-cost')
let parsedcost3 = parseFloat(cost3.innerHTML)

function buyUpgrade3(){
   if (parsedcoin >= parsedcost3){
      gps2 += 55
      level3.innerHTML = Math.round(parsedlevel3 +=1)
      coin.innerHTML = Math.round(parsedcoin -= parsedcost3)
      cost3.innerHTML = Math.round(parsedcost3 += 100)
   }
}

let level4 = document.querySelector('.minigun-level')
let parsedlevel4 = parseFloat(level4.innerHTML)

let cost4 = document.querySelector('.minigun-cost')
let parsedcost4 = parseFloat(cost4.innerHTML)

function buyUpgrade4(){
   if (parsedcoin >= parsedcost4){
      gps += 105
      level4.innerHTML = Math.round(parsedlevel4 +=1)
      coin.innerHTML = Math.round(parsedcoin -= parsedcost4)
      cost4.innerHTML = Math.round(parsedcost4 += 100)
   }
}

let level5 = document.querySelector('.bazuka-level')
let parsedlevel5 = parseFloat(level5.innerHTML)

let cost5 = document.querySelector('.bazuka-cost')
let parsedcost5 = parseFloat(cost5.innerHTML)

function buyUpgrade5(){
   if (parsedcoin >= parsedcost5){
      gps += 205
      level5.innerHTML = Math.round(parsedlevel5 +=1)
      coin.innerHTML = Math.round(parsedcoin -= parsedcost5)
      cost5.innerHTML = Math.round(parsedcost5 += 100)
   }
}

let level6 = document.querySelector('.tank-level')
let parsedlevel6 = parseFloat(level6.innerHTML)

let cost6 = document.querySelector('.tank-cost')
let parsedcost6 = parseFloat(cost6.innerHTML)

function buyUpgrade6(){
   if (parsedcoin >= parsedcost6){
      gps += 405
      level6.innerHTML = Math.round(parsedlevel6 +=1)
      coin.innerHTML = Math.round(parsedcoin -= parsedcost6)
      cost6.innerHTML = Math.round(parsedcost6 += 100)
   }
}

let level7 = document.querySelector('.plane-level')
let parsedlevel7 = parseFloat(level6.innerHTML)

let cost7 = document.querySelector('.plane-cost')
let parsedcost7 = parseFloat(cost6.innerHTML)

function buyUpgrade7(){
   if (parsedcoin >= parsedcost7){
      gps += 705
      level7.innerHTML = Math.round(parsedlevel7 +=1)
      coin.innerHTML = Math.round(parsedcoin -= parsedcost7)
      cost7.innerHTML = Math.round(parsedcost7 += 100)
   }
}

let level8 = document.querySelector('.bomba-level')
let parsedlevel8 = parseFloat(level6.innerHTML)

let cost8 = document.querySelector('.bomba-cost')
let parsedcost8 = parseFloat(cost6.innerHTML)

function buyUpgrade8(){
   if (parsedcoin >= parsedcost8){
      gps += 1005
      level7.innerHTML = Math.round(parsedlevel8 +=1)
      coin.innerHTML = Math.round(parsedcoin -= parsedcost8)
      cost7.innerHTML = Math.round(parsedcost8 += 100)
   }
}

setInterval(() => {
   parsedcoin += gps/10
   coin.innerHTML = Math.round(parsedcoin)
}, 100)

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


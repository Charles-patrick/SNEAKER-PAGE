const bigCont = document.querySelector(".img-one-cont")
const shoeOne = document.querySelector(".shoe1")
const shoeTwo = document.querySelector(".shoe2")
const shoeThree = document.querySelector(".shoe3")
const shoeFour = document.querySelector(".shoe4")
const minusBtn = document.querySelector(".minus-btn")
const addBtn = document.querySelector(".add-btn")
const dropDown = document.querySelector(".dropdown")
const cartBtn = document.querySelector(".cart-btn")
const bodyEl = document.getElementsByName("body")
const addtocartBtn = document.querySelector(".add-to-cart")
const emptyCartel = document.querySelector(".empty-cart")
const fallLimitedinfo = document.querySelector(".empty-cart-hidden")
let prIce = document.querySelector(".price")
let numberOfshoes = document.querySelector(".no-of-shoes")
let totalEl = document.querySelector(".total-el")
const numBer = document.querySelector("#zero")
let moneyEl = document.querySelector(".money").innerHTML
let moneyvalueEl = document.querySelector(".money-value").innerHTML
const deletebinBtn = document.querySelector(".delete-bin")
const modalEl = document.querySelector("#modal")
let closeBtn = document.querySelector(".close-btn")

let count = 1
numBer.textContent = count
prIce.textContent = "$" + moneyvalueEl
modalEl.classList.add("hidden")

// window.addEventListener('click', function(e) {
//    if (e.target !== dropDown) {
//       console.log("maddd")
//       // dropDown.className = "hidden"
//    }
// })
closeBtn.addEventListener("click", ()=>{
   modalEl.classList.add("hidden")
  })

bigCont.addEventListener("click", ()=>{
   modalEl.classList.remove("hidden")
  })

deletebinBtn.addEventListener("click", ()=>{
    fallLimitedinfo.classList.add("hidden")
    emptyCartel.classList.remove("hidden")
  })

fallLimitedinfo.classList.add("hidden")

addtocartBtn.addEventListener("click", ()=>{
    emptyCartel.classList.add("hidden")
    fallLimitedinfo.classList.remove("hidden")
    numberOfshoes.textContent = numBer.textContent
        timesFxn()
  })
  cartBtn.addEventListener("dblclick", ()=>{
    dropDown.className = "hidden"
  })

cartBtn.addEventListener("click", ()=>{
    dropDown.className = "dropdown-display"
  })


shoeTwo.addEventListener("click", ()=>{
     bigCont.innerHTML = "<img src='image-product-2.jpg' class='img-one'>"
  })

shoeOne.addEventListener("click", ()=>{
     bigCont.innerHTML = "<img src='image-product-1.jpg' class='img-one'>"
  })  

 shoeThree.addEventListener("click", ()=>{
     bigCont.innerHTML = "<img src='image-product-3.jpg' class='img-one'>"
  })  

shoeFour.addEventListener("click", ()=>{
     bigCont.innerHTML = "<img src='image-product-4.jpg' class='img-one'>"
  })    
  
  function timesFxn() {
   let multiPlication = parseFloat(moneyvalueEl) * Number(numBer.textContent )  
       totalEl.textContent = "$" + multiPlication.toFixed(2)
  }
  

 minusBtn.addEventListener("click", ()=>{
          
     if (count >= 2) {
        numBer.textContent = count -= 1
     } else {
        numBer.textContent = count
     }
  
    }) 
    
 addBtn.addEventListener("click", ()=>{
     numBer.textContent = count += 1
  })    




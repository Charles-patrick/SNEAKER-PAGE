const bigCont = document.querySelector(".img-one-cont")
const shoeOne = document.querySelector(".shoe1")
const shoeTwo = document.querySelector(".shoe2")
const shoeThree = document.querySelector(".shoe3")
const shoeFour = document.querySelector(".shoe4")
const numBer = document.querySelector("#zero")
const minusBtn = document.querySelector(".minus-btn")
const addBtn = document.querySelector(".add-btn")
const dropDown = document.querySelector(".dropdown")
const cartBtn = document.querySelector(".cart-btn")

let count = 0
numBer.textContent = count

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

 minusBtn.addEventListener("click", ()=>{
    
     if (count >= 1) {
        numBer.textContent = count -= 1
     } else {
        numBer.textContent = count
     }
    })     

 addBtn.addEventListener("click", ()=>{
     numBer.textContent = count += 1
  })    



const image=document.querySelector(".image")
const body=document.querySelector("body")
const header_1=document.querySelector("h1")
const header_2=document.querySelector("h2")

image.addEventListener("mouseover",()=>{
   body.classList.toggle('black');
   header_1.classList.toggle("white")
   header_2.classList.toggle("white")
})


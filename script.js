const btnMain=document.getElementById("btnMain");
const modalEl=document.getElementById("modal");
const overEl=document.getElementById("over");
const hiddenEl=document.getElementById("hidden");
btnMain.addEventListener("click",()=>{
    modalEl.classList.remove("show")
    overEl.classList.remove("show")
})

hiddenEl.addEventListener("click",()=>{
    modalEl.classList.add("show")
    overEl.classList.add("show")
})

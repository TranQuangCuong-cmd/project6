const clickbtn =document.querySelector(".btn-click");
const modalclick = document.querySelector(".modal");
const click_delete =document.querySelector(".modal-heading");
console.log(click_delete)


clickbtn.addEventListener("click", function(){
    modalclick.classList.add("open");
});

click_delete.addEventListener("click", function(){
    modalclick.classList.remove("open");
});


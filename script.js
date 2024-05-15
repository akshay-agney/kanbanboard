const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
let flag = true;
addBtn.addEventListener("click",(event) => {
    flag = !flag;
    if(flag == false) {
        modalCont.style.display = "flex";
    }else if(flag == true) {
        modalCont.style.display = "none";
    }
});
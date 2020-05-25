// const img_child = document.querySelectorAll(".child_child");
// const img_sub = document.querySelector("#img_sub");
// console.log(img_child);

// img_child.forEach(sub=>{
//     const child = sub.children;
//     for (const li of child) {
//         li.addEventListener("mouseover",(e)=>{
//             e.preventDefault();
//             img_sub.setAttribute("style",`background-image:url(./../img/Submenu/${li.getAttribute("data-img")})`);
//         })
//     }
// })
const subMenu = document.querySelectorAll(".sub_menu__child");
const back = document.querySelector(".back_abc");
function getShow(){
    subMenu.forEach((sub,i)=>{
        if(i>0)
        {
            sub.addEventListener("click",function(e){
            e.preventDefault();
            sub.classList.add("active-sub");
            // sub.parentElement.classList.add("hide-sub");
            back.classList.add("show");
            });
        }
        // back.classList.add("show");
    })
 }
 function backMenu(){
    const a  = document.querySelectorAll(".active-sub");
   
    a[a.length-1].classList.remove("active-sub");

    // a[a.length-1].parentElement.classList.remove("hide-sub");
   if(a.length == 1)
   {
    back.classList.remove("show");
    subMenu[0].style.opacity = "0";
   }
   console.log(a.length)
}

const close = document.querySelector(".closeMenu");
close.addEventListener("click",function(){
    document.querySelector("#collapsibleNavId").classList.remove("show");
})
 getShow();
 back.onclick = backMenu;




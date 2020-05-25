const tab = document.querySelectorAll(".tab_link");
const contents = document.querySelectorAll(".tab_item");

tab.forEach(element=>{
    element.addEventListener("click",(e)=>{
        e.preventDefault();
        const dataId = element.getAttribute("data-id");
        showContent(dataId);
    });
});

function showContent(id){
    for(let i = 0 ; i< contents.length;i++){
        contents[i].classList.remove("active-tab");
    }
    let content = document.getElementById(id);
    if(content!==null)
    {
        content.classList.add("active-tab");
    }
    // console.log(show)
}

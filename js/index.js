const where = document.getElementById("where");
const answer = document.getElementById("answer");
const iconR = document.getElementById("icon_right");

where.addEventListener("click",function () { 
    answer.classList.toggle("answer__active");
    iconR.classList.toggle("rotate");
 });
 answer.addEventListener("click",function () { 
    answer.classList.remove("answer__active");
    iconR.classList.remove("rotate");
});

const body = $("body");
const backTop = $(".backTop");


$(function () { 
    $("#formSearch").click(function () { 
        $(".wrapper_main").addClass("hideFormSearch");
        $(".form-search").toggleClass("showFormSearch");
     });
     $("#closeS").click(function () { 
        $(".wrapper_main").removeClass("hideFormSearch");
        $(".form-search").removeClass("showFormSearch");
     });
     backTop.click(function () { 
        $("html, body").animate({scrollTop: 0}, 1000);
     });
   //   Modal 2
   
   $("#bookmark").click(function () { 
      //  t1.fromTo($(".modal_content"),0.5,{scale:0.5},{scale:1});
       $("#modal_q").addClass("show-modal");

      // t1.fromTo($(".modal_content"),0.5,{x:"-50%"},{x:"50%",ease : Power2.easeInOut});
    

   });
   $("#closeP").click(function () { 
      // t1.fromTo($(".modal_content"),0.5,{scale:1},{scale:0.5});
     
          $("#modal_q").removeClass("show-modal");
      

      // $("#modal_q").removeClass("show-modal");

   });

   $("#closeMenu").click(function () { 
         $("#collapsibleNavId").removeClass("show");
    })
    
   const t1 = new TimelineMax({delay:0.5});
   const papa = $(".papa");
   t1.fromTo(papa.children()[0],0.5,{x:-500,opacity:0},{x:0,opacity:1})
   .fromTo(papa.children()[1],0.7,{x:200,opacity:0},{x:0,opacity:1})
   .fromTo($("#where"),1,{y:200,opacity:0},{y:0,opacity:1});
 });



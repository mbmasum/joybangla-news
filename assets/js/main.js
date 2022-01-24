// $(".nav-item").hover(function(){
//   $(this).find(".submenu").slideToggle(400);
// });

// $(".submenu").hover(function(){
//   $(this).find(".sub_submenu").slideDown(400);
// });


$(document).ready(function(){  
  
  
    $(window).on("scroll",function(){


      if($(window).scrollTop() > 200){
        $(".menu").addClass("fixed_top")
    }else{
        $(".menu").removeClass("fixed_top")
    }
  
      if($(window).scrollTop() > 400){
          $(".back-top-btn").fadeIn()
      }else{
          $(".back-top-btn").fadeOut()
      }
    })
  
  
    $(".back-top-btn").click(function(){
      $("html,body").animate({
        scrollTo: 0}, 800);
  
    });
  
  
  });
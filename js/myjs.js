$(document).ready(function() {

  $("html,body").stop();

  //set top slide show
  $.fn.cycle.defaults.autoSelector = '.slideshow';

  //set top background
  easy_background("#page-top",
    {
      slide: ["img/cover/cover2.jpg", "img/cover/cover1.jpg", "img/cover/cover3.jpg"],

      delay: [3510, 3510, 3510]
    }
  );

  $("#nav-logo").click(function(){
    $("html,body").animate({"scrollTop":$("#page-top").offset().top});
  })

  $("#nav-link-introduction").click(function(){
    $("html,body").animate({"scrollTop":$("#page-introduction").offset().top});
    if(!$(this).hasClass("active")){
              $("nav .active").removeClass("active");
              $(this).addClass("active");
      }
    else{
        return false;//this prevents flicker
    }
  })
  $("#nav-link-menu").click(function(){
    $("html,body").animate({"scrollTop":$("#page-menu").offset().top});
    if(!$(this).hasClass("active")){
              $("nav .active").removeClass("active");
              $(this).addClass("active");
      }
    else{
        return false;//this prevents flicker
    }
  })
  $("#nav-link-gallery").click(function(){
    $("html,body").animate({"scrollTop":$("#page-gallery").offset().top});
    if(!$(this).hasClass("active")){
              $("nav .active").removeClass("active");
              $(this).addClass("active");
      }
    else{
        return false;//this prevents flicker
    }
  })
  $("#nav-link-about").click(function(){
    $("html,body").animate({"scrollTop":$("#page-about").offset().top});
    if(!$(this).hasClass("active")){
              $("nav .active").removeClass("active");
              $(this).addClass("active");
      }
    else{
        return false;//this prevents flicker
    }
  })
})

/*scoll*/
$(window).scroll(function(){
  //set page by id
  page_top = document.getElementById("page-top");
  page_introduction = document.getElementById("page-introduction");
  page_menu = document.getElementById("page-menu");
  page_gallery = document.getElementById("page-gallery");
  page_about = document.getElementById("page-about");
  introduction_body = document.getElementById("introduction-set-article");

  if($(window).scrollTop()+$(window).height()/2 > page_introduction.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_introduction.offsetTop+page_introduction.offsetHeight){
    if(!$("#nav_link_skill").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav-link-introduction").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }else if($(window).scrollTop()+$(window).height()/2 > page_menu.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_menu.offsetTop+page_menu.offsetHeight) {
    if(!$("#nav-link-menu").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav-link-menu").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }else if($(window).scrollTop()+$(window).height()/2 > page_gallery.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_gallery.offsetTop+page_gallery.offsetHeight) {
    if(!$("#nav-link-gallery").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav-link-gallery").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }else if($(window).scrollTop()+$(window).height()/2 > page_about.offsetTop && $(window).scrollTop()+$(window).height()/2 <= page_about.offsetTop+page_about.offsetHeight) {
    if(!$("#nav-link-about").hasClass("active")){
              $("nav .active").removeClass("active");
              $("#nav-link-about").addClass("active");
    }
    else{
        return false;//this prevents flicker
    }
  }
  else{
        $("nav .active").removeClass("active");
  }

  //introduction animate
  if($(window).scrollTop()+$(window).height() >= page_introduction.offsetTop+$(window).height()/4 && $(window).scrollTop() < page_introduction.offsetTop+page_introduction.offsetHeight){
    introduction_body.style.opacity="1";
    introduction_body.style.animation="fadeIn 2s";
  }
  else{
    introduction_body.style.opacity="0";
    introduction_body.style.animation = "";
  }
})

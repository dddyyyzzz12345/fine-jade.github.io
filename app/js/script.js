// header
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

// circle
var timeOut = 2000;
var slideIndex = 0;
var autoOn = true;

autoSlides();
showSlides();

function autoSlides() {
    
    timeOut = timeOut - 10;

    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
}

function prevSlide() {

    timeOut = 2000;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace("active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 3
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {
   
    timeOut = 2000;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"; //seriers about the space between
}


// slide lists
$(function() {
    var w=$(window);
       var sliderContainer = $("#menu-slider-container");
       var sliderUl = $("#menu-slider");
       var sliderLi = sliderUl.children("li");
       var sliderNext = $("#menu-slider-next");
       var sliderPrev = $("#menu-slider-prev");
    var sliderLiWidth = sliderLi.eq(0).width();
       sliderUl.width(sliderLi.length * sliderLiWidth);
       
       if (sliderUl.width() > sliderContainer.width()) {
           sliderNext.fadeIn();
       }
     
    sliderNext.on("click", function() {
           var x = parseInt(sliderUl.css("marginLeft"));
           var ulWidth = sliderUl.width();
        if (ulWidth + x >= sliderContainer.width()) {
               x -= sliderLiWidth * 4;
               if (ulWidth + x < sliderContainer.width()) { x = sliderContainer.width() - ulWidth - 10; }
               sliderUl.stop().animate({ marginLeft: x }, 800);
          sliderPrev.fadeIn();
          console.log(parseInt(sliderUl.css("marginLeft"))*-1, ulWidth - sliderContainer.width());
           }
      if (parseInt(sliderUl.css("marginLeft"))*-1 >= ulWidth - sliderContainer.width()*2) {
            sliderNext.fadeOut();
          }
       });
        
       sliderPrev.on("click", function() {
           var x = parseInt(sliderUl.css("marginLeft"));
           var ulWidth = sliderUl.width();
        if (x <= 0) { 
               x += sliderLiWidth * 4;
               if (x > 0) { x = 0; }
               sliderUl.stop().animate({ marginLeft: x }, 800);
          sliderNext.fadeIn();
          if (x == 0) {
            sliderPrev.fadeOut();
          }
           }
       });
   });
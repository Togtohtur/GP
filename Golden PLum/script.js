$(document).ready(function() {
  /*Slider Function*/
  var slideIndex = 1;
  showSlides(slideIndex);
  function ShowNavBar(){
    var x = document.getElementsByClassName("nav-wrapper-mobile");
    if (x[0].style.visibility == "hidden") {
      
      x[0].style.visibility = "visible";
     } else {
      x[0].style.visibility = "hidden";
    }
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  function go () {
      currentSlide(slideIndex);
      slideIndex++;
      setTimeout(go, 6000); // callback
      if(slideIndex>3){
        slideIndex=1;
      }
  }
  go();
  $('#dot1').click(function(){
        currentSlide(1);
  });
  $('#dot2').click(function(){
        currentSlide(2);
  });

  $('#dot3').click(function(){
        currentSlide(3);
  });

  /*Go to top Function*/
  var btn = $('.totop');
  $('.totop').click(function() {
          $('body,html').animate({scrollTop:0},350);

  });


});

  /*Toggle Nav*/
  $(document).ready(function() {
    $('.nav-wrapper-mobile').click(function() {
      if ($('.toggle-nav').hasClass('active')) {
        $('.toggle-nav').removeClass('active');
        $(".container").find(".service-container").removeClass('active');
      } else {
        $('.toggle-nav').addClass('active');
      }
    })
  })


$(document).ready(function() {
  var element = document.getElementById('video');
  element.muted = true;







    // opacity change on scroll for the nav bar

    var windowHeight = $(window).height();
    var $menu = $('.opacity_change');


    //if ($(window).scrollTop() <= hauteurFenetre ) {
      $(window).scroll(function(){

        var number=$(window).scrollTop()/windowHeight;
        //on augmente l'opacité overlay
        $menu.css({
          background: 'rgba(33, 33, 33,'+number+')'
        });
        console.log("done");
      });



        function easyReveal(){

         var easyItem=  document.getElementsByClassName("easy");
         console.log(easyItem);

            for(var i=0; i<easyItem.length; i++){
                if(elementInViewport(easyItem[i])){
                  $(easyItem[i]).animate({
            opacity: 1,
            bottom: 0



          }, 500 );
        }


        }

          }


var clicked= false;

$('.burger').on("click", function(){
  if(clicked==true){
      $('.burger__dash--two').removeClass('burger__dash--two--active');
        $('.burger__dash--three').removeClass('burger__dash--three--active');
        $('.burger__dash--one').removeClass('burger__dash--one--active');
    $('.mobileMenu__wrapper').animate({
      top:-1500
    });
  }else{
      $('.burger__dash--two').addClass('burger__dash--two--active');
        $('.burger__dash--three').addClass('burger__dash--three--active');
        $('.burger__dash--one').addClass('burger__dash--one--active');

    $('.mobileMenu__wrapper').animate({
      top:-2
    });

  }
  clicked=!clicked;
});



var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },





  });
});

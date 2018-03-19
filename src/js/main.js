
$(document).ready(function() {


  window.onscroll=function(ev){
    easyReveal();
  };

  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }


  function easyReveal(){






    var easyItem4=  document.getElementsByClassName("easy4");


       for(var z=0; z<easyItem4.length; z++){
           if(elementInViewport(easyItem4[z])){
             $(easyItem3[y]).animate({
               opacity: 1,
               bottom: 0




     }, 400 );
    }


    }







        var easyItem3=  document.getElementsByClassName("easy3");


           for(var y=0; y<easyItem3.length; y++){
               if(elementInViewport(easyItem3[y])){
                 $(easyItem3[y]).animate({
           width: 100 +"%",




         }, 600 );
        }


        }




    var easyItem2=  document.getElementsByClassName("easy2");


       for(var x=0; x<easyItem2.length; x++){
           if(elementInViewport(easyItem2[x])){
             $(easyItem2[x]).animate({
       opacity: 1,
       bottom: 0



     }, 400 );
    }


    }








   var easyItem=  document.getElementsByClassName("easy");
   console.log(easyItem);

      for(var i=0; i<easyItem.length; i++){
          if(elementInViewport(easyItem[i])){
            $(easyItem[i]).animate({

        opacity: "0.6",
        bottom: 0



    }, 600 );
  }


  }

    }





    // opacity change on scroll for the nav bar

    var windowHeight = $(window).height();
    var $menu = $('.opacity_change');


    //if ($(window).scrollTop() <= hauteurFenetre ) {
      $(window).scroll(function(){

        var number=$(window).scrollTop()/windowHeight;
        //on augmente l'opacité overlay
        $menu.css({
          background: 'rgba(0, 0, 0,'+number+')'
        });
        console.log("done");
      });





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

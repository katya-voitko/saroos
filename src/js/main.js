
$(document).ready(function() {


class EasyReveal
{
  constructor($targets, back)
  {
    this.$targets = $targets;
    this.back = back;
    this.list = [];
    this.$window = $(window);
    this.initList();
    this.scrollInit();
    this.once();
  }
  initList()
  {
    this.$targets.each((i, target)=>
    {
      let $target = $(target);
      let offset = $target.offset().top;
      this.list.push({offset: offset, $target:$target});
    });
  }
  scrollInit()
  {
    this.$window.scroll(()=>
    {
      this.once();
    });
  }
  once()
  {
    let scroll = this.$window.scrollTop() + this.$window.height() - 200;
    this.list.forEach((element)=>
    {
      if(element.offset < scroll)
      {
        element.$target.addClass("easyRevealOn");
      }
      else if(this.back)
      {
        element.$target.removeClass("easyRevealOn");
      }
    });
  }
}
let $body = $("body");
if($body.data("easyreveal"))
{
  let $targets = $body.find('[class~="easyReveal"]');
  let easyReveal = new EasyReveal($targets, $body.data("revealback"));





}


window.onscroll=function(ev){
  easyReveal2();
};
  function easyReveal2(){
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


   var easyItem=  document.getElementsByClassName("easy");
   // console.log(easyItem);

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
        // console.log("done");
      });





var clicked= false;

$('.burger').on("click", function(){
  if(clicked==true){
      $('.burger__dash--two').removeClass('burger__dash--two--active');
        $('.burger__dash--three').removeClass('burger__dash--three--active');
        $('.burger__dash--one').removeClass('burger__dash--one--active');
    $('.mobileMenu__wrapper').css({
      left:-1500
    });
  }else{
      $('.burger__dash--two').addClass('burger__dash--two--active');
        $('.burger__dash--three').addClass('burger__dash--three--active');
        $('.burger__dash--one').addClass('burger__dash--one--active');

    $('.mobileMenu__wrapper').css({
      left:0
    });

  }
  clicked=!clicked;
});

$(window).scroll(function()
{


    $('.burger__dash--two').removeClass('burger__dash--two--active');
      $('.burger__dash--three').removeClass('burger__dash--three--active');
      $('.burger__dash--one').removeClass('burger__dash--one--active');

   $('.mobileMenu__wrapper').css({
    left:-1500
   });




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

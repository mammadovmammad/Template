$(document).ready(function(){

    $('.isotop').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        
      });

      $( "#web-d" ).click(function() {
        $('.isotop').isotope({ filter: ".web-design" });
      });

      $("#grap-d").click(function(){
          $('.isotop').isotope({filter: ".graphic-design"});
      });

      $("#photograpy").click(function(){
        $('.isotop').isotope({filter: ".photograpy"});
    });

        $("#all").click(function(){
        $('.isotop').isotope({filter: ".all"});
    });


    $('.owl-three').owlCarousel({
        rtl:true,
        navText:['<button type="button" class="btn slider-left-btn carusel-button-right"><i class="fas fa-angle-right"></i></button>','<button type="button" class="btn slider-right-btn carusel-button-left"> <i class="fas fa-angle-left  "></i></button>'],
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});

$('.owl-two').owlCarousel({
    rtl:true,
    navText:['<button type="button" class="btn slider-left-btn carusel-button-right"><i class="fas fa-angle-right"></i></button>','<button type="button" class="btn slider-right-btn carusel-button-left"> <i class="fas fa-angle-left  "></i></button>'],
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

// $('.owl-carousel2').find('.owl-nav').removeClass('disabled');
// $('.owl-carousel2').on('changed.owl.carousel2', function(event) {
// $(this).find('.owl-nav').removeClass('disabled');
// });


});

jQuery(document).ready(function($) {

    $('.count').counterUp({
        delay: 20,
        time: 1500
    });
    
  });

  var bar1 = new ProgressBar.Line('#mybar1', {color: '#67bbf7',
  trailColor: '#f5f5f5',easing: 'easeInOut',svgStyle: {width: '90%', height: '10px'},});
bar1.animate(1);

var bar2 = new ProgressBar.Line('#mybar2', {color: '#7e87c9',
  trailColor: '#f5f5f5',easing: 'easeInOut',svgStyle: {width: '80%', height: '10px'},});
bar2.animate(1);

var bar3 = new ProgressBar.Line('#mybar3', {color: '#c9048e',
  trailColor: '#f5f5f5',easing: 'easeInOut',svgStyle: {width: '70%', height: '10px'},});
bar3.animate(1);

var bar4 = new ProgressBar.Line('#mybar4', {color: '#dd9933',
  trailColor: '#f5f5f5',easing: 'easeInOut',svgStyle: {width: '60%', height: '10px'},});
bar4.animate(1);







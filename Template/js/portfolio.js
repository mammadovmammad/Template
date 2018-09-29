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


});
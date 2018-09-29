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
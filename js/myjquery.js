
$(window).scroll(function(){
    var scroll_top=$(this).scrollTop();

    if (scroll_top>300){
        $("#to_top").animate({right:"10px"},50);
    }
    else{
        $("#to_top").animate({right:"-100px"},50);
    }
});


$(document).ready(function(){
    $("#to_top").click(function(){
        $("html").animate({scrollTop:0},1000);
    });


});


$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 230) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

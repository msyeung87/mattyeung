$(function(){
    // Scroll to div
  $('a[href^="#"]').on('click', function(event) {

     var target = $( $(this).attr('href') );
     console.log($(this));
     //remove active class
     $("li.active").removeClass("active");
     $(this).addClass("active");
     if( target.length ) {
         event.preventDefault();
         $('html, body').animate({
             scrollTop: target.offset().top
         }, 1000);
     }

  });

  // Project hover effects
  $(".project").hover(function(event){
    $(this).css("opacity", ".4")
    // $(this).next('div').fadeIn(2000)
    $(this).next('div').attr("class","showme");
    $(this).next('div').addClass("animated").addClass("fadeIn")
    }, function(event){
    $(this).css("opacity", "none");
    // $(this).next('div').attr("class", "hideme");
    $(this).next('div').addClass("animated").addClass("zoomOut")
  });

    $('.bxslider').bxSlider();

    $(window).scroll({
            previousTop: 0
        }, 
        function () {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            $(".top-header").fadeIn();
        } else {
            $(".top-header").fadeOut()
        }
        this.previousTop = currentTop;
    });

    // footer year update
    var today = new Date()
    var year = today.getFullYear()
    var footerMessage = "© " + year + " | Matt Yeung"
    $('.bottom-footer').append(footerMessage);
});
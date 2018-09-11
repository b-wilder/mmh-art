var menuDisabled = false;

jQuery(function($) {

    $(window).on('load', function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('#main-wrapper').delay(350).css({'overflow':'visible'});
    });

    $(document).ready( function() {

      // backstretch for background image
      var defaultImgSrc = $('img.main-img').attr('src');
      $.backstretch(defaultImgSrc, {speed: 500});

	    // for responsive-menu
      $("#m-btn").click(function(){
        $("#responsive").toggle();
	    });


      // copy menu list to responsive menu
      var mainMenuList = $('#menu-list').html();
      $('#responsive').html(mainMenuList);

	    //for image slide on menu item click(normal) and responsive
	    $("#menu-list > li > a, #responsive a").on('click',function(e){


  			if(this.className == "external") {
          return;
        }

  			e.preventDefault();

        if (menuDisabled == false) // check the menu has disabled?
        {
            menuDisabled = true; // disable to menu

            var name = $(this).attr('href');
            var imgDetails = $("#img-details");
            $('#menu-list li').removeClass('active');
            $('#responsive li').removeClass('active');


            //  set active to both menu
            var menuClass = $(this).parent('li').attr('class');
            $('.'+menuClass).addClass('active');

            // hide responsive menu
            $("#responsive").hide();

            // get image url and assign to backstretch for background
            /*
            var imgSrc = $("img"+name+"-img").attr('src');
            $.backstretch(imgSrc, {speed: 500}); //backstretch for background fade in/out
            */

            // content slide in/out
            $("section.active").animate({left:$("section.active").outerWidth()}, 400,function(){
              imgDetails.removeClass("active");
              imgDetails.addClass("inactive");
              imgDetails.hide();
              $(this).removeClass("active");
              $(this).hide();
              $(name+"-text").show();
              $(name+"-text").animate({left:'0px'},400,function(){
                $(this).addClass("active");

                $.backstretch("resize"); // resize the background image

                menuDisabled = false; // enable the menu
              });
            });

            $(this).find(".lazy-load").each(function (index, element) {
              var img = new Image();
              img.src = $(element).data("lazy-load-image");
              if (typeof $(element).data("image-classname" !== "undefined"))
                img.className = $(element).data("image-classname");
              $(element).append(img);
            });
        }
        return;
      });

      $(".img-column > a").on('click',function(e){

  			e.preventDefault();

        if (menuDisabled == false) // check the menu has disabled?
        {
            menuDisabled = true; // disable to menu

            var imgSrc = $(this).find("img.art-img").attr("href");
            var imgDetails = $("#img-details");
            var imgElement = $("#img-details img");
            var activeSection = $("section.active");

            $('#menu-list li').removeClass('active');
            $('#responsive li').removeClass('active');


            imgDetails.addClass("active");
            //  set active to both menu
            /*
            var menuClass = $(this).parent('li').attr('class');
            $('.'+menuClass).addClass('active');
            */

            // hide responsive menu
            //$("#responsive").hide();

            // get image url and assign to backstretch for background
            /*
            var imgSrc = $("img"+name+"-img").attr('src');
            $.backstretch(imgSrc, {speed: 500}); //backstretch for background fade in/out
            */

            // content slide in/out
            imgElement.attr("href",imgSrc);
            imgDetails.animate({left:imgDetails.outerWidth()}, 400,function(){
              activeSection.removeClass("active");
              activeSection.hide();
              imgDetails.removeClass("inactive");
              imgDetails.show();
              imgDetails.animate({left:'0px'},400,function(){
                imgDetails.addClass("active");

                $.backstretch("resize"); // resize the background image

                menuDisabled = false; // enable the menu
              });
            });

            imgDetails.find(".lazy-load").each(function (index, element) {
              var img = new Image();
              img.src = $(element).data("lazy-load-image");
              if (typeof $(element).data("image-classname" !== "undefined"))
                img.className = $(element).data("image-classname");
              $(element).append(img);
            });
        }
        return;
      });

    });

});

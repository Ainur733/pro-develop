$(document).ready(function() {

    



    $( ".select_sub_menu" ).on( "click", function() {
        if($(this).hasClass( "select_sub_menu_active" )){
            $(this).removeClass( "select_sub_menu_active" )
            

        }else{
            $(this).addClass( "select_sub_menu_active" )
        }
        
      } );




    $( ".faq_it_header " ).on( "click", function() {
        if($(this).parent().hasClass( "faq_it_active" )){
            $('.faq_it').removeClass( "faq_it_active" )
        }else{
            $('.faq_it').removeClass( "faq_it_active" )
            $(this).parent().addClass( "faq_it_active" )
        }
        
      } );


 $( ".mobile_menu_icon " ).on( "click", function() {

        if($(this).hasClass( "mobile_menu_active" )){


            $(this).removeClass( "mobile_menu_active" )
            $(".menu").removeClass( "mobile_menu" )
            
        }else{

            $("body").css({"overflow":"hidden"})
          $(this).addClass( "mobile_menu_active" )
          $(".menu").css({"width":"320px"});
          $(".menu").addClass( "mobile_menu" )
          $(".header_contacts_mobile").css({"display":"flex"});
          
         
        }
        $(".nav-overlay").fadeIn()
        
 

      } );


      $( ".close_mob_menu" ).on( "click", function() {
        $(".header_contacts_mobile").css({"display":"none"});
        
            $(".menu").removeClass( "mobile_menu" )
            $(".mobile_menu_icon").removeClass( "mobile_menu_active" )
             
            $(".nav-overlay").fadeOut()
            setTimeout(sayHi, 300);
            
      } );

      function sayHi() {
        $(".menu").css({"width":"0"})
        $("body").css({"overflow":"auto"})
      }
      
      






                // Swiper: Slider
                    new Swiper('.slider_review', {
                        loop: true,
                        slidesPerView: 2,
                        paginationClickable: true,
                        spaceBetween: 20,

                        pagination: {
                            el: '.swiper-pagination',
                          },
                        breakpoints: {
                            1920: {
                                slidesPerView: 2,
                                spaceBetween: 42
                            },
                            1028: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            }
                        }
                    });
 });
                
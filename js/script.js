        // Toggle Menu 
        $(document).ready(function(){
            $(".toggle-menu").click(function(){
                $(".banner .nav-1").addClass("show")
            }),
            $(".toggle-menu").click(function(){
                $("body").addClass("overflow")
            }),
            $(".toggle-menu").click(function(){
                $(".toggle-overlay").addClass("visible")
            })
        })
        // Cancel-Menu 
        $(document).ready(function(){
            $(".cancel-menu").click(function(){
                $(".banner .nav-1").removeClass("show")
            }),
            $(".cancel-menu").click(function(){
                $("body").removeClass("overflow")
            }),
            $(".cancel-menu").click(function(){
                $(".toggle-overlay").removeClass("visible")
            })
        })
        // Input label 
        $(document).ready(function(){
            $(".main-input").click(function(){
                $(".sub-label").addClass("top");
            }),
            $(".main-input").focusout(function(){
                $(".sub-label").removeClass("top");
            })
        })


    // <!-- Swiper Js -->
    
        var nswiper = new Swiper(".nmySwiper", {
        slidesPerView: 5,
          freeMode: true,
            breakpoints: {
            1:{
                slidesPerView: 1,
            }, 
            768: {
            slidesPerView: 2,
            },
            1024: {
            slidesPerView: 5,
            },
        },
        });
    //   <!-- Swiper 2 -->
        var sswiper = new Swiper(".smySwiper", {
          slidesPerView: 3,
          spaceBetween: 20,
          freeMode: true,
          breakpoints: {
        1:{
            slidesPerView:4/3,
        }, 
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
    // <!-- Swiper 3 -->
        var swiper = new Swiper(".mySwiper", {
        spaceBetween:50,
          freeMode: true,
            breakpoints: {
            280:{
                slidesPerView:1.7,
            }, 
            310:{
                slidesPerView:2,
            }, 
            320:{
                slidesPerView:2.1,
            }, 
            325:{
                slidesPerView:2.3,
            }, 
            425:{
            slidesPerView: 2.8,
            },
            500: {
            slidesPerView: 3,
            },
            600: {
            slidesPerView: 3.8,
            },
            650: {
            slidesPerView: 4,
            },
            700: {
            slidesPerView: 4.5,
            },
            768: {
            slidesPerView: 4.8,
            },
            1024: {
            slidesPerView: 5,
            },
        },
        });
    //   <!-- Accordian -->
        $(document).ready(function () {
            $(".at-title").click(function () {
                $(this).toggleClass("active").next(".at-tab").slideToggle().parent().siblings().find(".at-tab");
            });
        });
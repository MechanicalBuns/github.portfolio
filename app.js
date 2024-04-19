$(document).ready(function(){

    $('.navbar > button').on('click', function(){
        var expanded = $(this).attr('aria-expanded');
        if (expanded === 'true') {
            $('.navbar').addClass('color-changed');
        } else {
            $('.navbar').removeClass('color-changed');
        }
    });

    $(window).resize(function(){
        if(window.innerWidth > 575) {
            $('.navbar-collapse').collapse('hide');
            $('.navbar > button').attr('aria-expanded', 'false'); 
            $('.navbar').removeClass('color-changed');
        }
    });

    $('.navbar-nav > .nav-item > .nav-link').on('click', function(){
        if(window.innerWidth <= 575) {
            $('.navbar-collapse').collapse('hide');
            $('.navbar > button').attr('aria-expanded', 'false'); 
            $('.navbar').removeClass('color-changed');
        }
    });


    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var projectsPosition = $('#projects').offset().top;
        var windowHeight = $(window).height();
    
        if (scrollDistance >= projectsPosition - windowHeight && scrollDistance <= projectsPosition + $('#projects').outerHeight()) {
            $('#animProjects').addClass('animate__animated animate__heartBeat animate__repeat-2');
        } else {
            $('#animProjects').removeClass('animate__animated animate__heartBeat animate__repeat-2');
        }
    });

    $('.welcome').addClass('animate__animated animate__slideInLeft');
    $('.name').addClass('animate__animated animate__fadeInDown animate__delay-1s');

    setTimeout(function() {
        $('.welcome').removeClass('animate__animated animate__slideInLeft');
        $('.name').removeClass('animate__animated animate__fadeInDown animate__delay-1s');
      }, 3000);

    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var morePosition = $('#more').offset().top;
        var windowHeight = $(window).height();
    
        if (scrollDistance >= morePosition - windowHeight && scrollDistance <= morePosition + $('#more').outerHeight()) {
            $('#animMore').addClass('animate__animated animate__heartBeat animate__repeat-2');
        } else {
            $('#animMore').removeClass('animate__animated animate__heartBeat animate__repeat-2');
        }
    });

    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var skillsPosition = $('#skills').offset().top;
        var windowHeight = $(window).height();
    
        if (scrollDistance >= skillsPosition - windowHeight && scrollDistance <= skillsPosition + $('#skills').outerHeight()) {
            $('#animSkills').addClass('animate__animated animate__heartBeat animate__repeat-2');
        } else {
            $('#animSkills').removeClass('animate__animated animate__heartBeat animate__repeat-2');
        }
    });

    $(window).on('scroll', function() {
        
          var scrollDistance = $(window).scrollTop();
          var projectsPosition = $('.topl').offset().top;
          var windowHeight = $(window).height();
    
          if (scrollDistance <= projectsPosition + windowHeight) {
            $('.welcome').addClass('animate__animated animate__slideInLeft');
            $('.name').addClass('animate__animated animate__fadeInDown animate__delay-1s');
          }
          else {
            $('.welcome').removeClass('animate__animated animate__slideInLeft');
            $('.name').removeClass('animate__animated animate__fadeInDown animate__delay-1s');
          }

       
    });

    $(window).scroll(function() {
        var scrollHeight = $(document).height();
        var windowWidth = $(window).width();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if (windowWidth > 398) {
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
          $('#sticky-footer').removeClass('d-none').addClass('animate__animated animate__slideInUp');
        } else {
          $('#sticky-footer').removeClass('animate__slideInUp').addClass('d-none');
        }
        }
        else $('#sticky-footer').removeClass('d-none');
    });

    
});


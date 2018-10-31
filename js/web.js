/*________________________ N A V   B A R _______________________*/

$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $('header').addClass('onScroll');
      $('#logo-white').addClass('onScroll');
      $('#logo-red').removeClass('onScroll');
      $('#menu a').addClass('onScroll');
      $('#menu-icon .lines').addClass('onScroll');

    }
    else {
      $('header').removeClass('onScroll');
      $('#logo-white').removeClass('onScroll');
      $('#logo-red').addClass('onScroll');
      $('#menu a').removeClass('onScroll');
      $('#menu-icon .lines').removeClass('onScroll');
    }
});

$(document).ready(function() {

  $('#menu-icon').click(function(){
    $(this).toggleClass('on');
    $('#menu').toggleClass('active');
    $('header').toggleClass('on');
    $('#menu-icon').toggleClass('active');

    // if($('#menu').is(':visible')) {
    //     $('body').addClass("fixedPosition");
    // }
    // else {
    //     $('body').removeClass("fixedPosition");
    //  }

    // Disable scrolling in the background when the mobile menu is open.
    // if ($('body').hasClass('lock-scroll')) {
    //     $('body').removeClass('lock-scroll');
    // }
    // else {
    //     $('body').addClass('lock-scroll');
    // }

  $('.menu-options').click(function() {
      $('#menu-icon').removeClass('on');
      $('#menu').removeClass('active');
      $('header').removeClass('on');
      $('#menu-icon').removeClass('active');
      $('body').removeClass('lock-scroll');
  });

  });
});



/*________________________ P R o J E C T   M O D A L _______________________*/

  // var projectModal = document.getElementsByClassName('project-modal')[1];
  // var seeMoreButton = document.getElementsByClassName('see-more')[1];
  // var modalCloseButton = document.getElementsByClassName('close-button')[1];

  // seeMoreButton.addEventListener('click', function() {
  //   projectModal.style.display = 'block';
  // });
  //
  // modalCloseButton.addEventListener('click', function() {
  //   projectModal.style.display = 'none';
  // });
  //
  // projectModal.addEventListener('click', function() {
  //   projectModal.style.display = 'none';
  // });


  var projectModal = document.getElementsByClassName('project-modal');
  var seeMoreButton = document.getElementsByClassName('see-more');
  var modalCloseButton = document.getElementsByClassName('close-button');

  for (var i = 0; i < seeMoreButton.length; i++) {
    if (i == 0) {
      seeMoreButton[0].addEventListener('click', function() {
        projectModal[0].style.display = 'block';
      });

      modalCloseButton[0].addEventListener('click', function() {
        projectModal[0].style.display = 'none';
      });

      projectModal[0].addEventListener('click', function() {
        projectModal[0].style.display = 'none';
      });
    }

    else if (i == 1){
      seeMoreButton[1].addEventListener('click', function() {
        projectModal[1].style.display = 'block';
      });

      modalCloseButton[1].addEventListener('click', function() {
        projectModal[1].style.display = 'none';
      });

      projectModal[1].addEventListener('click', function() {
        projectModal[1].style.display = 'none';
      });
    }

    else if (i == 2){
      seeMoreButton[2].addEventListener('click', function() {
        projectModal[2].style.display = 'block';
      });

      modalCloseButton[2].addEventListener('click', function() {
        projectModal[2].style.display = 'none';
      });

      projectModal[2].addEventListener('click', function() {
        projectModal[2].style.display = 'none';
      });
    }

    else if (i == 3){
      seeMoreButton[3].addEventListener('click', function() {
        projectModal[3].style.display = 'block';
      });

      modalCloseButton[3].addEventListener('click', function() {
        projectModal[3].style.display = 'none';
      });

      projectModal[3].addEventListener('click', function() {
        projectModal[3].style.display = 'none';
      });
    }

    else if (i == 4){
      seeMoreButton[4].addEventListener('click', function() {
        projectModal[4].style.display = 'block';
      });

      modalCloseButton[4].addEventListener('click', function() {
        projectModal[4].style.display = 'none';
      });

      projectModal[4].addEventListener('click', function() {
        projectModal[4].style.display = 'none';
      });
    }
  }

    // // Get modal element
    // var modal = document.getElementById('contact-modal');
    // // Get open modal button
    // var modalBtn = document.getElementById('modalBtn');
    // // Get close button
    // var closeBtn = document.getElementsByClassName('close-button')[0];
    //
    // // Listen for open click
    // modalBtn.addEventListener('click', openModal);
    // // Listen for close click
    // closeBtn.addEventListener('click', closeModal);
    // // Listen for outside click
    // window.addEventListener('click', outsideClick);
    //
    // // Function to open modal
    // function openModal(){
    //   modal.style.display = 'block';
    // }
    //
    // // Function to close modal
    // function closeModal(){
    //   modal.style.display = 'none';
    // }
    //
    // // Function to close modal if outside click
    // function outsideClick(e){
    //   if(e.target == modal){
    //     modal.style.display = 'none';
    //   }
    // }

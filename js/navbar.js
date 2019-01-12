$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

  $(document).ready(function(){
    window.onscroll = () => {
        const nav = document.querySelector('#colorchange');
        if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
      };
  });
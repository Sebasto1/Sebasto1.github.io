window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    
    if (scrollPosition > 0) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  var scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  scrollToTopBtn.addEventListener('click', scrollToTop);
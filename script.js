function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 300;
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  window.onload = function() {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    }
  }

  // Toggle mode and save preference
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save or remove from localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  }

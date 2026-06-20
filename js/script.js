<script>

    const slideElements = document.querySelectorAll('.slide-in-left, .slide-in-right');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
     entry.target.classList.add('animate');
     observer.unobserve(entry.target); 
      }

      });
    });

     slideElements.forEach(el => observer.observe(el));
</script>
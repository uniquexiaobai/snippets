function updateLazy($ul) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '100px',
    }
  );

  const lazyImages = $ul.querySelectorAll('img.lazy');
  lazyImages.forEach(image => {
    observer.observe(image);
  });
}

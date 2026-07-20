document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio initialized successfully.');

  // Subtle Parallax Cursor Movement Effect on Hero Cards
  const visualWrapper = document.querySelector('.hero-visual-wrapper');

  if (visualWrapper && window.innerWidth > 820) {
    document.addEventListener('mousemove', (e) => {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 10;

      visualWrapper.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      visualWrapper.style.transition = 'transform 0.1s ease-out';
    });
  }
});
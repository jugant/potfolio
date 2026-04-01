// Add functionality to the CTA button
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('button');
  const footer = document.querySelector('footer');

  if (!button || !footer) return;

  button.addEventListener('click', function () {
    footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    footer.classList.add('footer-highlight');

    setTimeout(function () {
      footer.classList.remove('footer-highlight');
    }, 1400);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      // Перевіряємо поточний стан
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      // Перемикаємо стан
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('is-open');
      
      // Змінюємо текст та іконку (як на макеті)
      if (!isExpanded) {
        menuToggle.innerHTML = '✕ Меню';
      } else {
        menuToggle.innerHTML = '☰ Меню';
      }
    });
  }
});
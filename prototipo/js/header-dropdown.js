document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle')
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const dropdownMenu = toggle.nextElementSibling;
      if (dropdownMenu.classList.contains('hidden')) {
        document.querySelectorAll('.dropdown-menu').forEach((menu) => {
          menu.classList.add('hidden');
        });
        dropdownMenu.classList.remove('hidden');
      } else {
        dropdownMenu.classList.add('hidden');
      }
    })
  });

  // Click outside to close dropdown
  window.addEventListener('click', (event) => {
    if (event.target.matches('.dropdown-toggle')) return;
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
      // if (menu.contains(event.target)) return;
      menu.classList.add('hidden');
    });
  });
});

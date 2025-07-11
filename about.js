document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.check-button');
  const contents = document.querySelectorAll('.check-content');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      const content = contents[index];
      const isActive = content.classList.contains('active');

      // Close all
      contents.forEach(c => c.classList.remove('active'));
      buttons.forEach(b => b.classList.remove('active'));

      // Toggle only if not already active
      if (!isActive) {
        content.classList.add('active');
        btn.classList.add('active');
      }
    });
  });
});

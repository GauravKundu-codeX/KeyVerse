document.addEventListener('DOMContentLoaded', function() {
  const keyboard = document.querySelector('.keyboard');
  const textarea = document.querySelector('textarea');
  const audio = document.getElementById('keyClickSound');

  keyboard.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
      const key = e.target.textContent;
      textarea.value += key;
      playClickSound();
    } else if (e.target.classList.contains('delete')) {
      textarea.value = textarea.value.slice(0, -1);
      playClickSound();
    } else if (e.target.classList.contains('shift')) {
      toggleShift();
      playClickSound();
    } else if (e.target.classList.contains('space')) {
      textarea.value += ' ';
      playClickSound();
    }
  });

  function playClickSound() {
    audio.currentTime = 0;
    audio.play();
  }

  function toggleShift() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      if (button.textContent.length === 1) {
        button.textContent = button.textContent === button.textContent.toLowerCase() ?
          button.textContent.toUpperCase() : button.textContent.toLowerCase();
      }
    });
  }
});
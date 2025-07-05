document.addEventListener('DOMContentLoaded', () => {
  const splashTexts = [
    'export FRIENDS=/dev/null;',
    'await somethingToHappen();',
    '#include <stdio.h> int main(int argc, char *argv[]) { printf("Wow this is a really long splash text\\n"); return 0; }',
    '#define MATH_PI = 3.141592653589793238462643383;',
    'alias rm="echo nope";',
    'long live the segfault;',
    'void hello() { hi(); }',
    ':(){ :|:& };:',
    'cd ~/watermelon_room && rm -rf *;',
    'long live the catppuccin;',
  ];

  const splashTextElement = document.getElementById('splash-text');

  if (splashTextElement) {
    splashTextElement.textContent =
        splashTexts[Math.floor(Math.random() * splashTexts.length)];
  }

  const cards = document.querySelectorAll('#content-id .card');

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, index * 100);
  });
});

document.getElementById('mewo').addEventListener('click', () => {
  const overlayElement = document.getElementById('omor-overlay');
  if (!overlayElement) return;

  const meowAudioElement = document.createElement('audio');
  meowAudioElement.src = '/sound/meow.ogg';
  meowAudioElement.play();

  if (Math.random() < 0.1) {
    setTimeout(() => {
      const explosionAudioElement = document.createElement('audio');
      explosionAudioElement.src = '/sound/explosion.ogg';
      explosionAudioElement.play();

      overlayElement.classList.add('visible');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          overlayElement.classList.remove('visible');
        });
      });
    }, 1000);
  }
});

document.getElementById('amen-break-button').addEventListener('click', () => {
  const audioFiles = [
    'cw_amen01_175.wav', 'cw_amen02_165.wav', 'cw_amen03_167.wav',
    'cw_amen04_170.wav', 'cw_amen05_158.wav', 'cw_amen06_169.wav',
    'cw_amen07_172.wav', 'cw_amen08_165.wav', 'cw_amen09_175.wav',
    'cw_amen10_135.wav', 'cw_amen11_145.wav', 'cw_amen12_137.wav',
    'cw_amen13_173.wav', 'cw_amen14_175.wav', 'cw_amen15_174.wav',
    'cw_amen16_167.wav', 'cw_amen17_175.wav', 'cw_amen18_178.wav',
    'cw_amen19_172.wav', 'cw_amen20_164.wav',
  ];

  const selectedIndex = Math.floor(Math.random() * audioFiles.length);

  const audioElement = document.getElementById('amen-break-audio');
  audioElement.src = '/sound/amen_breaks/' + audioFiles[selectedIndex];
  audioElement.controls = true;
  audioElement.autoplay = true;

  const pElement = document.getElementById('amen-break-text');
  pElement.innerHTML =
      '<br>Congratulations!! You got ' + audioFiles[selectedIndex] + '!!';

  if (selectedIndex == 1) {
    pElement.innerHTML += ' This is so szamar madar';
  } else if (selectedIndex == 3) {
    pElement.innerHTML += ' This is so deep blue';
  } else if (selectedIndex == 4) {
    pElement.innerHTML += ' This is so into the fire';
  } else if (selectedIndex == 12) {
    pElement.innerHTML += ' This is so death odyssey';
  } else if (selectedIndex == 14) {
    pElement.innerHTML += ' This is so unstoppable force';
  }
});

document.getElementById('oneko-button').addEventListener('click', () => {
  const onekoElement = document.getElementById('oneko');
  if (!onekoElement) return;

  const current_display = window.getComputedStyle(onekoElement).display;

  if (onekoElement) {
    if (current_display === 'none') {
      onekoElement.style.display = 'block';
    } else {
      onekoElement.style.display = 'none';
    }
  }
});

document.getElementById('hue-button').addEventListener('click', () => {
  const overlayElement = document.getElementById('hue-overlay');
  if (!overlayElement) return;

  overlayElement.classList.toggle('visible');
});

document.getElementById('debug-button').addEventListener('click', () => {
  const styleID = 'debug-style';
  let styleElement = document.getElementById(styleID);

  if (styleElement) {
    styleElement.remove();
  } else {
    styleElement = document.createElement('style');
    styleElement.id = styleID;
    styleElement.textContent = '* { outline: 1px solid red !important; }';
    document.head.appendChild(styleElement);
  }
});

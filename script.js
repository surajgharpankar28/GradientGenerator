const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');
const generateButton = document.getElementById('generate');
const randomButton = document.getElementById('random');
const copyButton = document.getElementById('copy');
const cssCode = document.getElementById('css-code');
const body = document.body;

// Generate Gradient Based on User Input
generateButton.addEventListener('click', () => {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  applyGradient(gradient);
});

// Generate Random Gradient
randomButton.addEventListener('click', () => {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  const randomDirection = getRandomDirection();

  color1.value = randomColor1;
  color2.value = randomColor2;
  direction.value = randomDirection;

  const gradient = `linear-gradient(${randomDirection}, ${randomColor1}, ${randomColor2})`;
  applyGradient(gradient);
});

// Copy CSS Code to Clipboard
copyButton.addEventListener('click', () => {
  if (cssCode.textContent) {
    navigator.clipboard.writeText(cssCode.textContent).then(() => {
      alert('CSS code copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy CSS code.');
      console.error(err);
    });
  } else {
    alert('No CSS code to copy!');
  }
});

// Apply Gradient to Background
function applyGradient(gradient) {
  body.style.background = gradient;
  cssCode.textContent = `background: ${gradient};`;
}

// Generate a Random Color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate a Random Direction
function getRandomDirection() {
  const directions = [
    'to right',
    'to left',
    'to bottom',
    'to top',
    'to bottom right',
    'to top left',
  ];
  return directions[Math.floor(Math.random() * directions.length)];
}

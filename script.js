const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const generateButton = document.getElementById("generate");
const randomButton = document.getElementById("random");
const copyButton = document.getElementById("copy");
const cssCode = document.getElementById("css-code");
const title = document.getElementById("title");
const body = document.body;

textGradient = (gradient) => {
  title.style.background = gradient;
  title.style.webkitBackgroundClip = "text";
  title.style.backgroundClip = "text";
  title.style.color = "transparent";
};

cssCodeGradient = (gradient) => {
  // Apply the gradient to the border using border-image
  cssCode.style.border = "3px solid transparent"; // Base transparent border
  cssCode.style.borderImage = gradient; // Set the gradient as border image
  cssCode.style.borderImageSlice = "1"; // Make sure the gradient covers the entire border
  cssCode.style.borderRadius = "15px";
};

//default gradient on load
window.onload = () => {
  const gradient = `linear-gradient(to right, #ff0000, #0000ff)`; // Example default gradient
  applyGradient(gradient);
  textGradient(gradient);
  cssCodeGradient(gradient);
};

// Generate Gradient Based on User Input
generateButton.addEventListener("click", () => {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  applyGradient(gradient);
  textGradient(gradient);
  cssCodeGradient(gradient);
});

// Generate Random Gradient
randomButton.addEventListener("click", () => {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  const randomDirection = getRandomDirection();

  color1.value = randomColor1;
  color2.value = randomColor2;
  direction.value = randomDirection;

  const gradient = `linear-gradient(${randomDirection}, ${randomColor1}, ${randomColor2})`;
  applyGradient(gradient);
  textGradient(gradient);
  cssCodeGradient(gradient);
});

// Copy CSS Code to Clipboard
copyButton.addEventListener("click", () => {
  if (cssCode.textContent) {
    navigator.clipboard
      .writeText(cssCode.textContent)
      .then(() => {
        alert("CSS code copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy CSS code.");
        console.error(err);
      });
  } else {
    alert("No CSS code to copy!");
  }
});

// Apply Gradient to Background
function applyGradient(gradient) {
  body.style.background = gradient;
  cssCode.textContent = `background: ${gradient};`;
  cssCode.style.fontSize = "14px";
}

// Generate a Random Color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate a Random Direction
function getRandomDirection() {
  const directions = [
    "to right",
    "to left",
    "to bottom",
    "to top",
    "to bottom left",
    "to bottom right",
    "to top left",
    "to top right",
  ];
  return directions[Math.floor(Math.random() * directions.length)];
}

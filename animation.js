const logo = document.getElementById("box");
const container = document.getElementById("container");

// Initial position and velocity
let x = 0;
let y = 0;
let dx = 3; // Horizontal speed
let dy = 3; // Vertical speed

// Get the container's width and height
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

function moveLogo() {
  // Update position
  x += dx;
  y += dy;

  // Check for collision with the walls
  if (x + logo.offsetWidth >= containerWidth || x <= 0) {
    dx = -dx; // Reverse horizontal direction
    dy += (Math.random() - 0.5) * 0.5;
    changeColor(); // Change
  }

  if (y + logo.offsetHeight >= containerHeight || y <= 0) {
    dy = -dy; // Reverse vertical direction
    dx += (Math.random() - 0.5) * 0.5;
    changeColor(); // Change color
  }

  // Set the new position
  logo.style.left = `${x}px`;
  logo.style.top = `${y}px`;

  requestAnimationFrame(moveLogo);
}

// change the logo color
let lastColorChange = 0;
const COLOR_CHANGE_DELAY = 100; // milliseconds

function changeColor() {
  const colors = ["red", "green", "blue"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  logo.style.backgroundColor = randomColor;
}

// Start the animation
moveLogo();

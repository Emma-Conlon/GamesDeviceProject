const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create circle
const circle = new Path2D();
circle.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill(circle);

// Listen for mouse moves
canvas.addEventListener('mousemove', function(event) {
  // Check whether point is inside circle
  if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
    ctx.fillStyle = 'green';
  }
  else {
    ctx.fillStyle = 'red';
  }

  // Draw circle
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(circle);
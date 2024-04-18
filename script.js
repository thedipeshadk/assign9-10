document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('main');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let brushSize = 5;
    let color = 'black';
  
    function draw(e) {
      if (!isDrawing) return;
      ctx.strokeStyle = color;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = brushSize;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
  
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
  
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
  
    document.getElementById('erase').addEventListener('click', function() {
      color = 'white'; // Set color to white for eraser
    });
  
    document.getElementById('new').addEventListener('click', function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  
    document.getElementById('black').addEventListener('click', function() {
      color = 'black';
    });
  
    document.getElementById('pink').addEventListener('click', function() {
      color = '#F50057';
    });
  
    document.getElementById('blue').addEventListener('click', function() {
      color = '#2979FF';
    });
  
    document.getElementById('yellow').addEventListener('click', function() {
      color = '#FFD600';
    });
  
    document.getElementById('slider').addEventListener('input', function(e) {
      brushSize = e.target.value;
      document.getElementById('brushSize').textContent = brushSize;
    });
  });

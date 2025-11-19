(function(){
  const canvas = document.getElementById('green-glow');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;

  let offset = 0;

  function draw() {
    ctx.clearRect(0,0,w,h);
    const grad = ctx.createLinearGradient(0,0,w,h);
    grad.addColorStop(0, 'rgba(46, 232, 143, 0.2)'); // helles Neon-Grün
    grad.addColorStop(0.5, 'rgba(46, 232, 143, 0.1)');
    grad.addColorStop(1, 'rgba(46, 232, 143, 0.0)');

    ctx.fillStyle = grad;

    ctx.save();
    ctx.translate(Math.sin(offset)*50, Math.cos(offset)*50); // sanfte Bewegung
    ctx.fillRect(0,0,w,h);
    ctx.restore();

    offset += 0.01; // Geschwindigkeit
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', ()=>{
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  });
})();

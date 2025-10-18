<template>
  <canvas ref="snow" class="pointer-events-none w-full h-full absolute top-0 left-0 z-[-1]"></canvas>
</template>

<script>
export default {
  name: "SnowfallEffect",
  mounted() {
    const canvas = this.$refs.snow;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let flakes = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 100
    }));

    function drawFlakes() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      for (let i = 0; i < flakes.length; i++) {
        let f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      moveFlakes();
    }

    let angle = 0;
    function moveFlakes() {
      angle += 0.01;
      for (let i = 0; i < flakes.length; i++) {
        let f = flakes[i];
        f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
        f.x += Math.sin(angle) * 2;

        if (f.y > height) {
          flakes[i] = { ...f, x: Math.random() * width, y: 0 };
        }
      }
    }

    function animate() {
      drawFlakes();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }
}
</script>

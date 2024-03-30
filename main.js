/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);
car.draw(ctx);

animate();

function animate() {
  canvas.height = window.innerHeight;
  car.update();

  ctx.save();
  ctx.translate(0, canvas.height * 0.7 - car.y);

  road.draw(ctx);
  car.draw(ctx);

  ctx.restore();
  requestAnimationFrame(animate);
}

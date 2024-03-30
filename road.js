class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = x - width / 2;
    this.right = x + width / 2;

    const infinity = 1000000;
    this.top = -infinity;
    this.bottom = infinity;

    this.borders = [
      [
        { x: this.left, y: this.bottom },
        { x: this.left, y: this.top },
      ],
      [
        { x: this.right, y: this.bottom },
        { x: this.right, y: this.top },
      ],
    ];
  }

  getLaneCenter(laneIndex) {
    const laneWidth = this.width / this.laneCount;
    return (
      this.left +
      Math.min(laneIndex, this.laneCount - 1) * laneWidth +
      laneWidth / 2
    );
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";

    ctx.setLineDash([20, 20]);
    for (let i = 1; i < this.laneCount; i++) {
      const x = lerp(this.left, this.right, i / this.laneCount);

      ctx.beginPath();
      ctx.moveTo(x, this.top);
      ctx.lineTo(x, this.bottom);
      ctx.stroke();
    }

    ctx.setLineDash([]);
    this.borders.forEach((segments) => {
      ctx.beginPath();
      ctx.moveTo(segments[0].x, segments[0].y);
      ctx.lineTo(segments[1].x, segments[1].y);
      ctx.stroke();
    });
  }
}

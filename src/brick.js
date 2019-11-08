import { detectCollision, detectSideCollision } from "./collisionDetection";

export default class brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
    this.position = position;
    this.width = 80;
    this.height = 24;

    this.health = 3;

    this.game = game;
    this.markedForDeletion = false;
  }

  update() {
    if (detectSideCollision(this.game.ball, this)) {
      this.game.ball.speed.x = -this.game.ball.speed.x;
      this.damage();
    } else {
      if (detectCollision(this.game.ball, this)) {
        this.game.ball.speed.y = -this.game.ball.speed.y;
        this.damage();
      }
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  damage() {
    this.health -= 1;
    switch (this.health) {
      case 2:
        this.image = document.getElementById("img_brickcrack");
        break;
      case 1:
        this.image = document.getElementById("img_brickbreak");
        break;
      case 0:
        this.markedForDeletion = true;
        break;
      default:
        break;
    }
  }
}

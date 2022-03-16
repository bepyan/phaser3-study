import { BombsLogic } from "./bombs";
import { GameLogic } from "./game";

export let stars;

export function configStars() {
  stars = this.physics.add.group({
    key: "star",
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 },
  });

  stars.children.iterate((child) => {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });

  return stars;
}

export const StarsLogic = {
  generateStars() {
    stars.children.iterate((child) => {
      child.enableBody(true, child.x, 0, true, true);
    });
  },

  collectStar(player, star) {
    star.disableBody(true, true);

    GameLogic.scoreStar();

    if (stars.countActive(true) === 0) {
      StarsLogic.generateStars();

      const x =
        player.x < 400
          ? Phaser.Math.Between(400, 800)
          : Phaser.Math.Between(0, 400);
      BombsLogic.generateBomb(x);
    }
  },
};

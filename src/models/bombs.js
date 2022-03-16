import { GameLogic } from "./game";

export let bombs;

export function configBombs() {
  bombs = this.physics.add.group();

  return bombs;
}

export const BombsLogic = {
  hitBomb(player, bomb) {
    this.physics.pause();
    GameLogic.gameOver();

    player.setTint(0xff0000);
    player.anims.play("turn");
  },

  generateBomb(x) {
    var bomb = bombs.create(x, 16, "bomb");
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  },
};

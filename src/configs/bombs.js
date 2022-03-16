export let bombs;

export function configBombs() {
  bombs = this.physics.add.group();

  return bombs;
}

export function hitBomb(player, bomb) {
  this.physics.pause();

  player.setTint(0xff0000);
  player.anims.play("turn");
}

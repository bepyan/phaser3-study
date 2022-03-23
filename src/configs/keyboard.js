import { GameLogic, player } from "../models";

export let cursors;
export let keyboards = {};

export function configKeyboard() {
  cursors = this.input.keyboard.createCursorKeys();

  keyboards.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

  return cursors;
}

export function watchKeyboard() {
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("turn");
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }

  if (keyboards.A.isDown) {
    GameLogic.toggleGravity.bind(this)();
  }

  return cursors;
}

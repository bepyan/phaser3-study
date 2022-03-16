import Phaser from "phaser";
import { Img } from "./assets";
import {
  configKeybard,
  configPlatforms,
  configPlayer,
  physics,
} from "./configs";

new Phaser.Game({
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  physics,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
});

function preload() {
  this.load.image("sky", Img.sky);
  this.load.image("ground", Img.ground);
  this.load.image("star", Img.star);
  this.load.image("bomb", Img.bomb);
  this.load.spritesheet("dude", Img.dude, {
    frameWidth: 32,
    frameHeight: 48,
  });
}

function create() {
  this.add.image(400, 300, "sky");

  const platforms = configPlatforms(this.physics);
  const player = configPlayer(this.physics, this.anims);

  this.physics.add.collider(player, platforms);
}

function update() {
  const cursors = this.input.keyboard.createCursorKeys();
  configKeybard(cursors);
}

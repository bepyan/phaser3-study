import Phaser from "phaser";
import { Img } from "./assets";
import {
  configKeybard,
  configPlatforms,
  configPlayer,
  configStars,
  collectStar,
} from "./configs";

new Phaser.Game({
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: { preload, create, update },
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
  const stars = configStars(this.physics);

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(stars, platforms);
  this.physics.add.overlap(player, stars, collectStar, null, this);
}

function update() {
  configKeybard(this.input.keyboard);
}

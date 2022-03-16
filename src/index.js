import Phaser from "phaser";
import { Img } from "./assets";
import {
  configKeybard,
  configPlatforms,
  configPlayer,
  configStars,
  configScoreText,
  collectStar,
  configBombs,
  hitBomb,
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
  configScoreText.bind(this)();

  const platforms = configPlatforms.bind(this)();
  const player = configPlayer.bind(this)();
  const stars = configStars.bind(this)();
  const bombs = configBombs.bind(this)();

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(stars, platforms);
  this.physics.add.overlap(player, stars, collectStar, null, this);

  this.physics.add.collider(bombs, platforms);
  this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update() {
  configKeybard.bind(this)();
}

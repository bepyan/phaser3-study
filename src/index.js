import Phaser from "phaser";
import { configKeyboard, configPlatforms } from "./configs";
import { loadImages } from "./loaders";
import {
  configBombs,
  configPlayer,
  configScoreText,
  configStars,
  BombsLogic,
  StarsLogic,
  GameLogic,
} from "./models";

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
  loadImages.bind(this)();
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
  this.physics.add.overlap(player, stars, StarsLogic.collectStar, null, this);

  this.physics.add.collider(bombs, platforms);
  this.physics.add.collider(player, bombs, BombsLogic.hitBomb, null, this);
}

function update() {
  if (GameLogic.isGameOver()) return;

  configKeyboard.bind(this)();
}

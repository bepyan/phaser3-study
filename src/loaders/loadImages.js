import { Img } from "../assets";

export function loadImages() {
  this.load.image("sky", Img.sky);
  this.load.image("ground", Img.ground);
  this.load.image("star", Img.star);
  this.load.image("bomb", Img.bomb);
  this.load.spritesheet("dude", Img.dude, {
    frameWidth: 32,
    frameHeight: 48,
  });
}

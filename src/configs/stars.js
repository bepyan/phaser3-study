export let stars;

export const configStars = (physics) => {
  stars = physics.add.group({
    key: "star",
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 },
  });

  stars.children.iterate((child) => {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });

  return stars;
};

export const collectStar = (player, star) => {
  star.disableBody(true, true);
};

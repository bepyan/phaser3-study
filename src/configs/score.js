export let score = 0;
export let scoreText;

const STAR_SCORE = 10;

export function configScoreText() {
  scoreText = this.add.text(16, 16, "score: 0", {
    fontSize: "32px",
    fill: "#000",
  });
}

export const scoreStar = () => {
  score += STAR_SCORE;
  scoreText.setText("Score: " + score);
};

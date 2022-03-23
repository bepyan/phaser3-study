const BASE_STAR_SCORE = 10;

export let gameOver = false;
export let score = 0;
export let scoreText;

export function configScoreText() {
  scoreText = this.add.text(16, 40, "Score: 0", {
    fontSize: "32px",
    fill: "#000",
  });

  return scoreText;
}

export const GameLogic = {
  isGameOver() {
    return gameOver;
  },
  gameOver() {
    gameOver = true;
  },
  gameRestart() {
    gameOver = false;
  },
  scoreStar() {
    score += BASE_STAR_SCORE;
    scoreText.setText("Score: " + score);
  },
};

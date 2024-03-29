export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}

export function detectSideCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let leftOfBall = ball.position.x;
  let rightOfBall = ball.position.x + ball.size / 2;
  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    (rightOfBall === leftSideOfObject || leftOfBall === rightSideOfObject)
  ) {
    return true;
  } else {
    return false;
  }
}

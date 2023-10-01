const train = document.getElementById("train");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

let isMoving = false;
let animationInterval;

startButton.addEventListener("click", () => {
  if (!isMoving) {
    isMoving = true;
    startAnimation();
  }
});

stopButton.addEventListener("click", () => {
  if (isMoving) {
    isMoving = false;
    clearInterval(animationInterval);
  }
});

function startAnimation() {
  animationInterval = setInterval(() => {
    const currentTransform = getComputedStyle(train).transform;
    const currentTranslateX = getCurrentTranslateX(currentTransform);

    train.style.transform = `translateX(${currentTranslateX + 10}px)`;
  }, 100);
}

function getCurrentTranslateX(transform) {
  const matrix = transform.match(/matrix\((.+)\)/);
  if (matrix) {
    const matrixValues = matrix[1].split(", ");
    return parseFloat(matrixValues[4]);
  } else {
    return 0;
  }
}

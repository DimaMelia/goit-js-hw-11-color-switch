const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

let max = colors.length - 1;

const changeColor = () => {
    const i = randomIntegerFromInterval(0, max);
    document.body.style = 'background-color: ' + colors[i];
}

startBtn.addEventListener('click', () => {
    intervalId = setInterval(changeColor, 1000);
    startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    startBtn.disabled = false;
});

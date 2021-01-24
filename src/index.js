import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="start"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// 1. Будет функция которая будет выбирать рандомный индекс массива
// 2. Функция которая принимает мин и макс длину массива
// и применяет высчитывает нужный вам индекс
// И после цвет который соответствует этому индексу уже применяете
const random = randomIntegerFromInterval(0, colors.length - 1);

const start = function () {
  setInterval(() => {
    document.body.style.backgroundColor = colors[random];
  }, 500);
};
// start();
refs.startBtn.addEventListener('click', start);
// console.log(refs.startBtn);

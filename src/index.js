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
  stopBtn: document.querySelector('button[data-action="stop"]'),
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorChanger = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      const random = randomIntegerFromInterval(0, colors.length - 1);

      document.body.style.backgroundColor = colors[random];
      console.log('changing color');
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    console.log('i am stopped');
  },
};

refs.startBtn.addEventListener('click', colorChanger.start.bind(colorChanger));
refs.stopBtn.addEventListener('click', colorChanger.stop.bind(colorChanger));

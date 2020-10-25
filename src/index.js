import './styles.css';
//Массив цветов
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
// создаем рефы
const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const switchColor = {
  intervalId: null, // начальное значение
  isActive: false, // начальное значение
  onStartSwitchColor() {
    if (this.isActive) {      // проверяем, если функция активна, ретерн
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => switchBackgroundColor(colors), 1000);
    refs.startBtn.disabled = true;
  },
  onStopSwitchColor() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.startBtn.disabled = false;
  },
};
// генерация случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//  выбираем рандомный цвет из массива
function switchBackgroundColor(colors) {
  const colorId = randomIntegerFromInterval(0, colors.length - 1);
//   refs.body.style.backgroundColor = colors[colorId];
 refs.body.style.cssText = `background-color: ${colors[colorId]}`;
}

// Вешаем слушателя событий на старт и стоп
refs.startBtn.addEventListener('click', switchColor.onStartSwitchColor.bind(switchColor));
refs.stopBtn.addEventListener('click', switchColor.onStopSwitchColor.bind(switchColor));

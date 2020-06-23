const DATA = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
const chart = document.querySelector('.chart__content');
const CHART_HEIGHT = chart.clientHeight;

const createBar = (value) => {
  const bar = document.createElement('div');
  bar.classList.add('bar');

  const maxDataHeight = Math.max(...DATA);
  const heightStep = parseFloat((CHART_HEIGHT / maxDataHeight).toFixed(2));
  const barHeight = `${Math.trunc(value * heightStep)}px`;

  const color =
    value <= 5 ? '#52c41a' : value > 5 && value <= 10 ? '#fadb14' : '#f5222d';

  bar.setAttribute('style', `height: ${barHeight}; background-color: ${color}`);

  return bar;
};

const createLabel = (value) => {
  const label = document.createElement('div');
  label.classList.add('label');
  label.textContent = value;

  return label;
};

const renderBars = () => {
  const fragment = document.createDocumentFragment();
  DATA.forEach((item) => {
    fragment.appendChild(createBar(item));
  });
  chart.appendChild(fragment);
};

const renderLabels = () => {
  const fragment = document.createDocumentFragment();
  DATA.forEach((_, index) => {
    fragment.appendChild(createLabel(index));
  });
  chart.appendChild(fragment);
};

chart.setAttribute(
  'style',
  `grid-template-columns: repeat(${DATA.length}, 1fr)`
);

renderBars();
renderLabels();

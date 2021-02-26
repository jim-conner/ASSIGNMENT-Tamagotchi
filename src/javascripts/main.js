import '../styles/main.scss';
// maybe change the showeat function name to something more descriptive
const showEat = () => {
  const domString = `
  <button type="healthy-btn" class="btn btn-primary">Healthy</button>
  <button type="unhealthy-btn" class="btn btn-primary">Unhealthy</button>`;
  document.querySelector('#eat').innerHTML = domString;
  // document.querySelector('#healthy-btn').addEventListener('click', healthy)
};

const init = () => {
  showEat();
};

init();

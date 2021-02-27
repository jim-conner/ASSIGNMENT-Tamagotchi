import '../styles/main.scss';
// maybe change the showeat function name to something more descriptive
const showEat = () => {
  const domString = `
  <text type="text-area" value="100" id="eat-number">100</text>
  <button id="healthy-btn" type="button" class="btn btn-primary">Healthy</button>
  <button id="unhealthy-btn" type="button" class="btn btn-primary">Unhealthy</button>`;
  document.querySelector('#eat').innerHTML = domString;
};
let full = 100;
// const eatAddSub = () => {
//   showEat();
//   full = document.querySelector('#eat');
  
//   document.querySelector('#eat').innerHTML('click', (e) => {

//   });
// };

const init = () => {
};

init();

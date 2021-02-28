import '../styles/main.scss';
// maybe change the showeat function name to something more descriptive
let full = 100;
const eatAddSub = () => {
  // document.querySelector('#eat').innerHTML = full;
  const eatButtonsToDom = `
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 100%"
      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <b id="${full}">100</b>
    <button id="add-10" type="button" class="btn btn-primary">Healthy</button>
    <button id="sub-3" type="button" class="btn btn-primary">Unhealthy</button>`;
  document.querySelector('#eat').innerHTML += eatButtonsToDom;

  document.querySelector('#eat').addEventListener('click', (e) => {
    if (e.target.id.includes('add-10')) {
      // console.error('healthy button was clicked');
      full += 10;
      document.querySelector('#eat').innerHTML = full;
      console.warn(full);
    } if (e.target.id.includes('sub-3')) {
      // console.error('unhealthy button was clicked');
      full -= 3;
      console.warn(full);
    }
  });
};

const init = () => {
  eatAddSub();
};

init();

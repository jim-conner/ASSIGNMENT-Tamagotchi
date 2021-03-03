let energy = 50;

const sleep = () => {
  const sleepButtonsToDom = `
  <h5 id="sleep-title">SLEEP</h5>
  <h5 id="sleep-number"><em>${energy}</em></h5>
  <button id="sleep-add-50" type="button" class="btn btn-primary">😴 Nap</button>
  <button id="sleep-add-60" type="button" class="btn btn-primary">💤 Deep Slumber</button>`;
  document.querySelector('#sleep').innerHTML += sleepButtonsToDom;
  document.querySelector('#sleep-number').innerHTML = energy;

  const sleepAddFirst = () => {
    energy += 50;
    if (energy > 100) {
      energy = 100;
    }
    document.querySelector('#sleep-number').innerHTML = energy;
  };

  const sleepAddSecond = () => {
    energy += 60;
    if (energy > 100) {
      energy = 100;
    }
    document.querySelector('#sleep-number').innerHTML = energy;
  };

  document.querySelector('#sleep').addEventListener('click', (e) => {
    if (e.target.id.includes('sleep-add-50')) {
      sleepAddFirst();
    }
    if (e.target.id.includes('sleep-add-60')) {
      sleepAddSecond();
    }
  });
};

export default sleep;

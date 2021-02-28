import '../styles/main.scss';
// maybe change the showeat function name to something more descriptive
let full = 100;
const eatAddSub = () => {
  const eatButtonsToDom = `
  <h5 id="eat-title">EAT</h5>
  <h5 id="eat-number"><em>${full}</em></h5>
  <button id="add-10" type="button" class="btn btn-primary">Apple</button>
  <button id="sub-3" type="button" class="btn btn-primary">Ice Cream</button>`;
  document.querySelector('#eat').innerHTML += eatButtonsToDom;
  document.querySelector('#eat-number').innerHTML = full;

  const eatAdd = () => {
    full += 10;
    if (full > 100) {
      full = 100;
    }
    document.querySelector('#eat-number').innerHTML = full;
  };

  const eatSub = () => {
    full -= 3;
    if (full < 0) {
      full = 0;
    }
    document.querySelector('#eat-number').innerHTML = full;
  };

  document.querySelector('#eat').addEventListener('click', (e) => {
    if (e.target.id.includes('add-10')) {
      eatAdd();
    }
    if (e.target.id.includes('sub-3')) {
      eatSub();
    }
  });
};

let fun = 50;
const play = () => {
  const playButtonsToDom = `
  <h5 id="play-title">PLAY</h5>
  <h5 id="play-number"><em>${fun}</em></h5>
  <button id="play-add-50" type="button" class="btn btn-primary">Coding</button>
  <button id="play-add-2" type="button" class="btn btn-primary">Tea Time</button>`;
  document.querySelector('#play').innerHTML += playButtonsToDom;
  document.querySelector('#play-number').innerHTML = fun;

  const playAddFirst = () => {
    fun += 50;
    if (fun > 100) {
      fun = 100;
    }
    document.querySelector('#play-number').innerHTML = fun;
  };

  const playAddSecond = () => {
    fun += 2;
    if (fun > 100) {
      fun = 100;
    }
    document.querySelector('#play-number').innerHTML = fun;
  };

  document.querySelector('#play').addEventListener('click', (e) => {
    if (e.target.id.includes('play-add-50')) {
      playAddFirst();
    }
    if (e.target.id.includes('play-add-2')) {
      playAddSecond();
    }
  });
};

const init = () => {
  eatAddSub();
  play();
};

init();

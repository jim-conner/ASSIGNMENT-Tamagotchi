let full = 100;

const eat = () => {
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
export default eat;

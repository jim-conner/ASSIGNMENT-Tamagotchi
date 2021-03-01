let strength = 100;

const fight = () => {
  const fightButtonsToDom = `
  <h5 id="fight-title">FIGHT</h5>
  <h5 id="fight-number"><em>${strength}</em></h5>
  <button id="add-1" type="button" class="btn btn-primary">Flight</button>
  <button id="sub-10" type="button" class="btn btn-primary">Violent Act</button>`;
  document.querySelector('#fight').innerHTML += fightButtonsToDom;
  document.querySelector('#fight-number').innerHTML = strength;

  const fightAdd = () => {
    strength += 1;
    if (strength > 100) {
      strength = 100;
    }
    document.querySelector('#fight-number').innerHTML = strength;
  };

  const fightSub = () => {
    strength -= 10;
    if (strength < 0) {
      strength = 0;
    }
    document.querySelector('#fight-number').innerHTML = strength;
  };

  document.querySelector('#fight').addEventListener('click', (e) => {
    if (e.target.id.includes('add-1')) {
      fightAdd();
    }
    if (e.target.id.includes('sub-10')) {
      fightSub();
    }
  });
};
export default fight;

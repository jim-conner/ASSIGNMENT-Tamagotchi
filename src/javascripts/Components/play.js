let fun = 50;

const play = () => {
  const playButtonsToDom = `
  <h5 id="play-title">PLAY</h5>
  <h5 id="play-number"><em>${fun}</em></h5>
  <button id="play-add-50" type="button" class="btn btn-primary">💻 Coding</button>
  <button id="play-add-2" type="button" class="btn btn-primary">📺 Watch TV</button>`;
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

export default play;

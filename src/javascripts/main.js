import '../styles/main.scss';
// import buildProgress from './Components/progress';
import eat from './Components/eat';
import play from './Components/play';
import fight from './Components/fight';
import sleep from './Components/sleep';

const init = () => {
  eat();
  play();
  fight();
  sleep();
  // buildProgress();
};

init();

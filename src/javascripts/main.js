import '../styles/main.scss';
import eat from './Components/eat';
import play from './Components/play';
import fight from './Components/fight';
import sleep from './Components/sleep';

const init = () => {
  eat();
  play();
  fight();
  sleep();
};

init();

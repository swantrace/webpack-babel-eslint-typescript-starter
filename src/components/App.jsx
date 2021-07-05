import '../styles/index.scss';
import Recipes from './Recipes';
import sword from '../images/swc-sword.png';
import swordSvg from '../images/sword.svg';

const App = () => (
  <>
    <section className="hero" />
    <main>
      <section>
        <h1>Oh Hai, React</h1>
      </section>
      <img src={sword} alt="sword" width="250" />
      <img src={swordSvg} alt="sword" width="250" />
      <Recipes />
    </main>
  </>
);

export default App;

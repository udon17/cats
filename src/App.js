import CatImage1 from './cat1.jpg';
import CatImage2 from './cat2.jpg';
import CatImage3 from './cat3.jpg';
import CatImage4 from './cat4.jpg';
import CatImage5 from './cat5.jpg';
import CatImage6 from './cat6.jpg';
import CatImage7 from './cat7.jpg';
import CatImage8 from './cat8.jpg';
import CatImage9 from './cat9.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        love cat gallery
      </header>
      <ul>
        <li><img src={CatImage1} alt="cat1" /></li>
        <li><img src={CatImage2} alt="cat1" /></li>
        <li><img src={CatImage3} alt="cat1" /></li>
        <li><img src={CatImage4} alt="cat1" /></li>
        <li><img src={CatImage5} alt="cat1" /></li>
        <li><img src={CatImage6} alt="cat1" /></li>
        <li><img src={CatImage7} alt="cat1" /></li>
        <li><img src={CatImage8} alt="cat1" /></li>
        <li><img src={CatImage9} alt="cat1" /></li>
      </ul>
    </div>
  );
}

export default App;

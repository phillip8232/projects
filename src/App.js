import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigationbar } from './components/Navigationbar';
import { Projectshowcase } from './components/Projectshowcase';
import { Artworks } from './components/Artworks';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Projectshowcase/>
      <Artworks/>
    </div>
  );
}

export default App;

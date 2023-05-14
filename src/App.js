import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigationbar } from './components/Navigationbar';
import { Projectshowcase } from './components/Projectshowcase';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Projectshowcase/>
    </div>
  );
}

export default App;

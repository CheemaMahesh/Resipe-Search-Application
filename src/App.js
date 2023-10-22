import './App.css';
import ContextApi from './ContextAip';
import Home from './Components/pages/Home';
import Nav from './Components/pages/Nav';
import Trending from './Components/pages/Trending';
import Meat from './Components/pages/Meat';

function App() {
  return (
    <div className="App">
     <ContextApi>
      <Nav/>
      <Home/>
      <Trending/>
      <Meat/>
     </ContextApi>
    </div>
  );
}

export default App;

import './App.css';
import ContextApi from './ContextAip';
import Home from './Components/pages/Home';
import Nav from './Components/pages/Nav';

function App() {
  return (
    <div className="App">
     <ContextApi>
      <Nav/>
    <Home/>
     </ContextApi>
    </div>
  );
}

export default App;

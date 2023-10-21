import './App.css';
import ContextApi from './ContextAip';
import Home from './Components/pages/Home';

function App() {
  return (
    <div className="App">
     <ContextApi>
    <Home/>
     </ContextApi>
    </div>
  );
}

export default App;

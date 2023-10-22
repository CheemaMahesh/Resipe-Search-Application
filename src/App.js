import './App.css';
import ContextApi from './ContextAip';
import Home from './Components/pages/Home';
import Nav from './Components/pages/Nav';
import Trending from './Components/pages/Trending';
import Meat from './Components/pages/Meat';
import Recipe from './Components/pages/Recipe';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Favorite from './Components/pages/Favorite';
import Error from './Components/pages/Error';

function App() {

  const rr=createBrowserRouter([{
    path:'/',
    element:<Nav/>,
    errorElement:<Error/>,
    children:[{
      index:true,
      element:<>
      <Home/>
      <Trending/>
      <Meat/>
      </>
     
    },
    {
      path:'/Recipe',
      element:<Recipe/>
    },
    {
      path:'/Favorites',
      element:<Favorite/>
    }
  ]
  }])
  return (
    <div className="App">
     <ContextApi>
      {/* <Nav/>
      <Home/>
      <Trending/>
      <Meat/>
      <hr/>
      <Recipe/> */}
      <RouterProvider router={rr}/>
     </ContextApi>
    </div>
  );
}

export default App;

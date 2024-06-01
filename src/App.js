import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Work from './components/Work/Work';
import About from './components/About/About';
import Events from './components/Events/Events';
import Press from './components/Press/Press';
import Social from './components/Social/Social';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Home></Home>,
    errorElement: <div>404 not found</div>
  },
  {
    path: '/work',
    element: <Work></Work>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/events',
    element: <Events></Events>
  },
  {
    path: '/press',
    element: <Press></Press>
  },
  {
    path: '/socialimpact',
    element: <Social></Social>
  }
])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

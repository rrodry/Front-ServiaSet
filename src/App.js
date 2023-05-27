import './App.css';
import {
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Main from './components/Main';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/main",
    element: <Main/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
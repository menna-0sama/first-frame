
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact'
import Error from './Components/Error/Error';

function App() {

  let router = createBrowserRouter([
    {path:'/' ,element:<Layout/> ,children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>},
      {path: '*',element:<Error/>}
    ]},
    
  ])
  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App

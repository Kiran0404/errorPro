
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar'
import E200 from './components/E200';
import E301 from './components/E301';
import E404 from './components/E404';
import E500 from './components/E500';

function App() {


  return (
    <>
    
     <BrowserRouter>
     <Routes>
      <Route path= '/' element = {<Navbar/>}>
      <Route path= '/e200' element = {<E200/>}></Route>
      <Route path= '/e301' element = {<E301/>}></Route>
      <Route path= '/e404' element = {<E404/>}></Route>
      <Route path= '/e500' element = {<E500/>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

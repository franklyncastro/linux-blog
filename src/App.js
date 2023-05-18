import "./App.css";
import {Routes, Route, useLocation} from 'react-router-dom'
import Landing from "./components/Landing/Landing";
import Nav from "./components/NavBar/Nav";
import Home from './components/Home/Home'
import Content from "./components/Content/Content";
import Description from "./components/Description/Description";



function App() {
  const location = useLocation()

  return (
    <div className="App">

      {
        location.pathname === '/' ? <> </> : <Nav/>
      }

      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/content' element={<Content/>}/>
        <Route exact path='/description' element={<Description/>}/>
      </Routes>
  
    </div>
  );
}

export default App;

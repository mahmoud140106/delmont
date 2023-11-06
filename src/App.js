// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/home/Home';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/pages' element={<h1>2</h1>}></Route>
        <Route path='/research' element={<h1>3</h1>}></Route>
        <Route path='/services' element={<h1>4</h1>}></Route>
        <Route path='/blog' element={<h1>5</h1>}></Route> */}
        <Route path='*' element={<h1 className='notfound'>page not found</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

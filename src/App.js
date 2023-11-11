// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/home/Home';
import Header from './component/header/Header';
import Footer from './component/footer/footer';
import Research from './component/research/research';
import All from './component/research/tabs/all';
import Cardiology from './component/research/tabs/cardiology';
import Oncology from './component/research/tabs/oncology';
import Orthopedics from './component/research/tabs/orthopedics';
import Pharmacy from './component/research/tabs/pharmacy';
import Anesthesiology from './component/research/tabs/anesthesiology';
import Pediatric from './component/research/tabs/pediatric';
import Blog from './component/blog/blog';
import About from './component/about/about';
import Contact from './component/contact/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/pages'>
          <Route index element={<About/>}/>
          <Route path='aboutus' element={<About/>}/>
          <Route path='contactus' element={<Contact/>}/>
        </Route>
        <Route path='/research' element={<Research/>}>
          <Route index element={<All/>}/>
          <Route path='all' element={<All/>}/>
          <Route path='cardiology' element={<Cardiology/>}/>
          <Route path='oncology' element={<Oncology/>}/>
          <Route path='orthopedics' element={<Orthopedics/>}/>
          <Route path='pharmacy' element={<Pharmacy/>}/>
          <Route path='anesthesiology' element={<Anesthesiology/>}/>
          <Route path='pediatric' element={<Pediatric/>}/>
        </Route>
        {/* <Route path='/services' element={<h1>4</h1>}></Route> */}
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<h1 className='notfound'>page not found</h1>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

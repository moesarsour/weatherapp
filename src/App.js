import './App.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Nav from './components/nav'
import Weather from './components/weather'
import Footer from './components/footer'
import New from './components/new'
import Favorite from './components/favorite';
import Multi from './components/multi'



function App() {
return (
      <div className='app flex'>
        <div className=' flex flex-col items-center'>
          <Nav/>
    <Routes>
        <Route path ='/' element={<Weather/>}/>
        <Route path ='/new' element={<New/>}/>
        <Route path ='/favorite' element={<Favorite/>}/>
        <Route path ='/multi' element={<Multi/>}/>
    </Routes>
      <Footer/>

        </div>
      </div>
  

);
}

export default App;

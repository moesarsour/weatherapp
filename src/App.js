import './App.css';
// import { BrowserRouter as Router, } from 'react-router-dom';
import Footer from './components/footer'
import Weather from './components/weather'
import Nav from './components/nav'



function App() {
return (
  <div className='app flex'>
    <div className=' flex flex-col items-center'>
     
      <Nav/>
       <><Weather />
      <Footer /></>
    </div>
  </div>

);
}

export default App;

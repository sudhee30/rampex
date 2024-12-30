
import './App.css'
import Home from './components/functionalcomponent/home.jsx';
import Contact from './components/functionalcomponent/Contact.jsx';
import Gallery from './components/functionalcomponent/Galery.jsx';
import About from './components/functionalcomponent/About.jsx';
import NavBar from './components/functionalcomponent/NavBar.jsx';
import Footer from './components/functionalcomponent/Footer.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  
  
  return (
    <div>
        <BrowserRouter>
          <NavBar/><Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path = "/Contact" element = {<Contact/>}/>
            <Route path = "/Gallery" element = {<Gallery/>}/>
            <Route path = "/About" element ={<About college="Kongu Engineering" clg = "NAturopathy" clg1="Architecture"/>
            
}/>


          </Routes>
          
        </BrowserRouter>
        <div>
          <footer>
            <Footer/>
          </footer>
        </div>
        
    </div>
  );
}

export default App;

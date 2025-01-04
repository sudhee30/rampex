
import './App.css'
import Home from './components/functionalcomponent/home.jsx';
import Contact from './components/functionalcomponent/Contact.jsx';
import Gallery from './components/functionalcomponent/Galery.jsx';
import About from './components/functionalcomponent/About.jsx';
import NavBar from './components/functionalcomponent/NavBar.jsx';
import Footer from './components/functionalcomponent/Footer.jsx';
import UseEffect from '../src/components/functionalcomponent/UseEffect.jsx'
import UseRef from './components/functionalcomponent/UseRef.jsx';
import UseMemo from './components/functionalcomponent/UseMemo.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Task1 from './components/functionalcomponent/Day5tsk1.jsx';
import Task2 from './components/functionalcomponent/Day5task2.jsx';
import UseContext from './components/functionalcomponent/UseContext.jsx';
import Signup from './components/functionalcomponent/Signup.jsx'
import Login from './components/functionalcomponent/Login.jsx'

function App() {
  
  
  return (
    <div>
        <BrowserRouter>
          <NavBar/><Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path = "/Contact" element = {<Contact/>}/>
            <Route path = "/Gallery" element = {<Gallery/>}/>
            <Route path = "/About" element ={<About college="Kongu Engineering" clg = "NAturopathy" clg1="Architecture"/>}/>
            <Route path = "/UseEffect" element = {<UseEffect/>}/>
            <Route path = "/UseRef" element = {<UseRef/>}/>
            <Route path = "/Task1" element = {<Task1/>}/>
            <Route path = "/Task2" element = {<Task2/>}/>
            <Route path='/Signup' element = {<Signup/>}/>
            <Route path='/Login' element = {<Login/>}/>

            <Route path = "/UseContext" element = {<UseContext/>}/>
            <Route path = "/UseMemo" element = {<UseMemo/>}/>








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

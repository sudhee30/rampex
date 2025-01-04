import '../../assets/css/NavBar.css'
import { Link } from 'react-router-dom';


function NavBar(){
    return(
        <header>
            <nav>
                <ul>
                    
                    <li><Link to = '/' >Home</Link></li>
                    <li><Link to = '/Gallery'>Gallery</Link></li>
                    <li><Link to = '/About'>About</Link></li>
                    <li><Link to = '/Contact'>Contact</Link></li>
                    <li><Link to = '/UseEffect'>UseEffect</Link></li>
                    <li><Link to = '/UseRef'>UseRef</Link></li>
                    <li><Link to = '/Task1'>Task1</Link></li>
                    <li><Link to = '/Task2'>Task2</Link></li>
                    <li><Link to = '/UseCOntext'>UseContext</Link></li>
                    <li><Link to = '/UseMemo'>UseMemo</Link></li>
                    <li><Link to = '/Signup'>Signup</Link></li>
                    <li><Link to = '/Login'>Login</Link></li>







                </ul>
            </nav>
        </header>
    )
}
export default NavBar;

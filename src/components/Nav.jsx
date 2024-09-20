import {Link} from 'react-router-dom'
import logo1 from  '../assets/formula-e-logo.png'
import logo2 from  '../assets/logo-mahindra.png'
import { NavStyle } from "../css/NavStyle.jsx"


const  Nav= () =>{
    return(
        <>
        <NavStyle>
            <header>
                <div className="nav">
                    {/* LOGO  */}

                    <div className="logos">
                        <img id="logo1" src={logo1} alt="" />
                        <h1>x</h1>
                        <img id="logo2" src={logo2} alt="" />
                    </div>
                    

                    <div className="links">
                        
                        <Link to='/classificacao' className='navLink'>Classificação</Link>
                        
                        <Link to='/corrida' className='navLink'>Corridas</Link>
                        
                        <Link to='/highlights' className='navLink'>Highlights</Link>
                        
                        <Link to='/sustentabilidade' className='navLink'>Sustentabilidade</Link>
                        
                    </div>
                
                </div>
            </header>
        </NavStyle>
        </>
    )
}

export default Nav
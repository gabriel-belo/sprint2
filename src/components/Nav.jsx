import {Link} from 'react-router-dom'
import logo1 from  '../assets/formula-e-logo.png'
import logo2 from  '../assets/logo-mahindra.png'
import { NavStyle } from "../css/NavStyle.jsx"




const  Nav= () =>{


    var navigationHeader= document.getElementById('navigation-header');
    var showSideBar= false;

    function toggleSideBar() {
        showSideBar= !showSideBar;
        if(showSideBar){
            navigationHeader.style.marginLeft= '-10vw';
            navigationHeader.style.animationName= 'showSideBar';
        }else{
            navigationHeader.style.marginLeft= '-100vw';
            navigationHeader.style.animationName= '';
        }
    };




    return(
        <>
        <NavStyle>
            <header>
                <div className="nav">
                    {/* LOGO  */}
                    <Link to='/'>
                        <div className="logos">
                            <img id="logo1" src={logo1} alt="" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            <img id="logo2" src={logo2} alt="" />
                        </div>
                    </Link>
                    
                    <div className="navigation-header">
                        <button onClick={toggleSideBar} className="btn-icon-header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                        
                        <Link to='/classificacao' className='navLink'>Classificação</Link>
                        
                        <Link to='/corrida' className='navLink'>Corridas</Link>
                        
                        <Link to='/highlights' className='navLink'>Highlights</Link>
                        
                        <Link to='/sustentabilidade' className='navLink'>Sustentabilidade</Link>
                        
                    </div>
                    <button onClick={toggleSideBar} id="button" className="btn-icon-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                
                </div>
            </header>
        </NavStyle>
        </>
    )
}

export default Nav
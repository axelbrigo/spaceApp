import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import {CgMenuLeft} from 'react-icons/cg'

function Header() {
    const handleCLick = () => {
        const navbar = document.querySelector('.navbar')
        const listItems = document.querySelectorAll('.list__item')

        navbar.classList.toggle("open")

        listItems.forEach((item) => 
        item.addEventListener('click', () => navbar
        .classList.remove("open"))
        )
    }  

return (
        <>
        <header className="header">
            <div>
                <Link to="/"><img src={logo} alt="space Tourism" title="Space Tourism" /></Link>
            </div>

            <nav className="navbar">
                <ul>
                    <li className="list__item">
                        <Link to="/" className="text__link--menu"><span className="span__number">00</span> Home</Link>
                    </li>
                </ul>

                <ul>
                    <li className="list__item">
                        <Link to="/destination" className="text__link--menu"><span className="span__number">01</span> Destination</Link>
                    </li>
                </ul>

                <ul>
                    <li className="list__item">
                        <Link to="/crew" className="text__link--menu"><span className="span__number">02</span> Crew</Link>
                    </li>
                </ul>

                <ul>
                    <li className="list__item">
                        <Link to="/technology" className="text__link--menu"><span className="span__number">03</span> Technology</Link>
                    </li>
                </ul>
            </nav>

            <div className="div__main--menu">
                <button className="button__icon" onClick={handleCLick}>
                    <CgMenuLeft className="menu__icon"></CgMenuLeft>
                </button>
            </div>
        </header>
            
     
        </>
    )
}

export default Header

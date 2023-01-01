import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons'
const SideBar = () => (
    <div className = 'nav-bar'>
        <Link className="logo" to ='/'>
            <img src = {LogoS} alt= "logo"/>
            <img className='sub=logo' src={LogoSubtitle} alt="Atharv"/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname= "active" to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact = "true" activeclassname= "active" to='/about' className="about-link">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact = "true" activeclassname= "active" to='/contact' className='contact-link'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                rel='noreferrer'
                href='https://www.linkedin.com/in/atharv-salian-a38780218/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a 
                rel='noreferrer'
                href='https://www.linkedin.com/in/atharv-salian-a38780218/'
                >
                    <FontAwesomeIcon icon={faMedium} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a 
                rel='noreferrer'
                href='https://www.linkedin.com/in/atharv-salian-a38780218/'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a 
                rel='noreferrer'
                href='https://www.linkedin.com/in/atharv-salian-a38780218/'
                >
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default SideBar;
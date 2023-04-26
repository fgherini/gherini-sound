import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import fglogo from '../../assets/images/fglogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={fglogo} alt='logo'></img>   
              
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
             <FontAwesomeIcon icon={faHome} color="#DCDCDC" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
             <FontAwesomeIcon icon={ faUser } color="#DCDCDC" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
             <FontAwesomeIcon icon={ faEnvelope } color="#DCDCDC" />
            </NavLink>
        </nav>
        
    </div>
    )

export default Sidebar
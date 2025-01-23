import {useState} from 'react'
import styles from '../../components/nav/navbar.module.css'
import {Link} from 'react-scroll';

import close from '../../../assets/nav/closeIcon.png';
import menu from '../../../assets/nav/menuIcon.png';



const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav  className={styles.navbar}>
            <a className={styles.title} href='/'>My Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={
                        menuOpen
                            ? close
                            : menu
                            }
                    alt='menuIcon'
                    onClick={()=> {
                        setMenuOpen(!menuOpen)}}
                    />
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : null}`}
                >
                    <li>
                        <a href='/'><Link to="about" smooth={true} duration={500}>About</Link></a>
                    </li>
                    <li>
                        <a href='/'><Link to="experience" smooth={true} duration={500}>Experience</Link></a>
                    </li>
                    <li>
                        <a href='/'><Link to="projects" smooth={true} duration={500}>Projects</Link></a>
                    </li><li>
                        <a href='/'><Link to="footer" smooth={true} duration={500}>Contact</Link></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
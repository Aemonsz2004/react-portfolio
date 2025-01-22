import {useState} from 'react'
import styles from '../../components/nav/navbar.module.css'



const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                    src={
                        menuOpen
                            ? "../../../assets/nav/closeIcon.png"
                            : "../../../assets/nav/menuIcon.png"
                            }
                    alt='menuIcon'
                    onClick={()=> {
                        setMenuOpen(!menuOpen)}}
                    />
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : null}`}
                >
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Experience</a>
                    </li>
                    <li>
                        <a href='/'>Projects</a>
                    </li><li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
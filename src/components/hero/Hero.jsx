
import styles from './hero.module.css'
import { useState } from 'react'
import {Link} from 'react-scroll';

import nerd from '../../../assets/hero/nerd.png'
import nerd2 from '../../../assets/hero/nerd2.jpg'




    const Hero = () => {

        const [currentImage, setCurrentImage] = useState(nerd2);
        const handleImage1 = () => {
            setCurrentImage(nerd);
        }
        const handleImage2 = () => {
            setCurrentImage(nerd2);
        }
        return (
            <section  className={styles.heroContainer}>
                <div className={styles.heroLeft}>
                    <h1>Hi, I&apos;m Emman</h1>
                    <p>I&apos;m an aspiring full-stack developer. Building experience to become one. Reach out if you&apos;d like to learn more!</p>

                    <a href='mailto:myemail@gmail.com' className={styles.contactBtn}>
                        <Link to="footer" smooth={true} duration={500}>Contact</Link>
                        <div className={styles.hoverEffect}>
                            <div></div>
                        </div>
                    </a>

                </div>
        
                    <img className={styles.heroImage} src={currentImage} onMouseEnter={handleImage1} onMouseLeave={handleImage2} alt='hero-image' ></img>
                    <div className={styles.topBlur}></div>
                    <div className={styles.bottomBlur}></div>
            </section>
        )
    }

export default Hero
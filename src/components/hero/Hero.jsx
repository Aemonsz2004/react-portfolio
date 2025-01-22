import React from 'react'
import styles from './hero.module.css'


    const Hero = () => {
        return (
            <section className={styles.heroContainer}>
                <div className={styles.heroLeft}>
                    <h1>Hi, I&apos;m Emman</h1>
                    <p>I&apos;m an aspiring full-stack developer. Building experience to become one. Reach out if you&apos;d like to learn more!</p>
                    <a href='mailto:myemail@gmail.com' className={styles.contactBtn}>Contact Me</a>
                </div>
        
                    <img className={styles.heroImage} src='../../../assets/hero/nerd2.jpg' alt='hero-image'></img>
                    <div className={styles.topBlur}></div>
                    <div className={styles.bottomBlur}></div>
            </section>
        )
    }

export default Hero
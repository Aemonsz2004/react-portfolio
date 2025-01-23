
import styles from './footer.module.css'

import github from '../../../assets/footer/githubIcon.png';
import gmail from '../../../assets/footer/gmailIcon.png';

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.wrapperLeft}>
            <h1>
                Contact
            </h1>
            <h2>
                Feel free to reach out!
            </h2>
        </div>

        <div className={styles.wrapperRight}>
            <div className={styles.flex}>
                <img src={gmail} alt='icon'/>
                <p>
                    aemonsz2525@gmail.com
                </p>
            </div>

            <div className={styles.flex}>
                <img src={gmail} alt='icon'/>
                <p>
                    e.abas.546488@umindanao.edu.ph
                </p>
            </div>

            <div className={styles.flex}>
                <img src={github} alt='icon'/>
                <p>
                    https://github.com/Aemonsz2004
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
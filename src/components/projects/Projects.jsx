import './projects.module.css'
import styles from './projects.module.css'

import catmog from '../../../assets/projects/catmog.jpg'
import catsus from '../../../assets/projects/catsus.jpg'
import handsomecat from '../../../assets/projects/handsomecat.jpg'
import mewing from '../../../assets/projects/mewing.png'
import supersigma from '../../../assets/projects/supersigma.webp'
import mewingcat from '../../../assets/projects/mewingcat.jpg'
import mewingmigga from '../../../assets/projects/mewingmigga.webp'

const Projects = () => {
return (
    <section className={styles.projectSection}>
    <h1>
            PROJECTS
        </h1>
        <div className={styles.projectContainer}>

            <div className={styles.projectCard}>
                <img src={catmog} />
                <div>
                    <h2>
                        Project A
                    </h2>
                    <p>
                        This is a project made to
                        learn the latest languages
                        by building an app.
                    </p>
                </div>
                
                <ul className={styles.languageList}>
                    <li>React</li>
                    <li>Express</li>
                    <li>Node</li>
                </ul>
                <ul className={styles.buttonList}>
                    <li>
                        <a href='/'>
                            Demo
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Source
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.projectCard}>
                <img src={catsus}/>
                <div>
                    <h2>
                        Project A
                    </h2>
                    <p>
                        This is a project made to
                        learn the latest languages
                        by building an app.
                    </p>
                </div>
                
                <ul className={styles.languageList}>
                    <li>React</li>
                    <li>Express</li>
                    <li>Node</li>
                </ul>
                <ul className={styles.buttonList}>
                    <li>
                        <a href='/'>
                            Demo
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Source
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.projectCard}>
                <img src={handsomecat} />
                <div>
                    <h2>
                        Project A
                    </h2>
                    <p>
                        This is a project made to
                        learn the latest languages
                        by building an app.
                    </p>
                </div>
                
                <ul className={styles.languageList}>
                    <li>React</li>
                    <li>Express</li>
                    <li>Node</li>
                </ul>
                <ul className={styles.buttonList}>
                    <li>
                        <a href='/'>
                            Demo
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Source
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.projectCard}>
                <img src={mewing}/>
                <div>
                    <h2>
                        Project A
                    </h2>
                    <p>
                        This is a project made to
                        learn the latest languages
                        by building an app.
                    </p>
                </div>
                
                <ul className={styles.languageList}>
                    <li>React</li>
                    <li>Express</li>
                    <li>Node</li>
                </ul>
                <ul className={styles.buttonList}>
                    <li>
                        <a href='/'>
                            Demo
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Source
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.projectCard}>
                <img src={supersigma} alt='super sigma'/>
                <div>
                    <h2>
                        Super Sigma
                    </h2>
                    <p>
                        Don&apos;t forget to drink your water.
                    </p>
                </div>
                
                <ul className={styles.languageList}>
                    <li>React</li>
                    <li>Express</li>
                    <li>Node</li>
                </ul>
                <ul className={styles.buttonList}>
                    <li>
                        <a href='/'>
                            Demo
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Source
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.projectCard}>
                <img src={mewingcat}/>
                <div>
                    <h2>
                        Project A
                    </h2>
                    <p>
                        This is a project made to
                        learn the latest languages
                        by building an app.
                    </p>
                </div>
                
                <ul className={styles.languageList}>
                    <li>React</li>
                    <li>Express</li>
                    <li>Node</li>
                </ul>
                <ul className={styles.buttonList}>
                    <li>
                        <a href='/'>
                            Demo
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Source
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.projectCard}>
                <img src={mewingmigga}/>
                <div>
                    <h2>
                        Project A
                    </h2>
                    <p>
                        This is a project made to
                        learn the latest languages
                        by building an app.
                    </p>
                </div>
                
                <ul className={styles.languageList}>
                    <li>React</li>
                    <li>Express</li>
                    <li>Node</li>
                </ul>
                <ul className={styles.buttonList}>
                    <li>
                        <a href='/'>
                            Demo
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Source
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    </section>
    )
}
import './projects.module.css'

export default Projects 
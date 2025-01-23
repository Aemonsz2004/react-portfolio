import styles from './experience.module.css'

import css from '../../../assets/experience/css.png'
import figma from '../../../assets/experience/Figma.png'
import html from '../../../assets/experience/html.png'
import mysql from '../../../assets/experience/icons8-mysql-144.png'
import java from '../../../assets/experience/java.png'
import js from '../../../assets/experience/js.png'
import node from '../../../assets/experience/node.png'
import react from '../../../assets/experience/react.png'
import um from '../../../assets/experience/um.png'


const Experience = () => {
  return (
    <section>
        <div className={styles.container}>
            <h1>EXPERIENCE</h1>
            <div className={styles.wrapper}>
                <div className={styles.contentLeft}>
                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src={html} alt='HTML'></img>
                        </div>
                        <h2>HTML</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src={css} alt='CSS'></img>
                        </div>
                        <h2>CSS</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src={js} alt='Javascript'></img>
                        </div>
                        <h2>Javascript</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src={react} alt='React'></img>
                        </div>
                        <h2>React</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src={node} alt='NodeJs'></img>
                        </div>
                        <h2>NodeJS</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src={mysql} alt='MySQL'></img>
                        </div>
                        <h2>MySQL</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src={java} alt='Java'></img>
                        </div>
                        <h2>Java</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src={figma} alt='Figma'></img>
                        </div>
                        <h2>Figma</h2>
                    </div>
                </div>
                <div className={styles.contentRight}>
                    <div className={styles.contentRightWrapper}>
                        <img src={um} alt='um logo'/>
                        <div>
                            <h2>Frontend Developer</h2>
                            <h3>00/00/2025</h3>
                            <ul>
                                <li>
                                    <p>Soon</p>
                                </li>
                                <li>
                                    <p>Soon</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.contentRightWrapper}>
                        <img src={um} alt='um logo'/>
                        <div>
                            <h2>Backend Developer</h2>
                            <h3>00/00/2025</h3>
                            <ul>
                                <li>
                                    <p>Soon</p>
                                </li>
                                <li>
                                    <p>Soon</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.contentRightWrapper}>
                        <img src={um} alt='um logo'/>
                        <div>
                            <h2>UI/UX Designer</h2>
                            <h3>00/00/2025</h3>
                            <ul>
                                <li>
                                    <p>Soon</p>
                                </li>
                                <li>
                                    <p>Soon</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Experience
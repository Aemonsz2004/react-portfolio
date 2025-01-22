import styles from './experience.module.css'

const Experience = () => {
  return (
    <section>
        <div className={styles.container}>
            <h1>EXPERIENCE</h1>
            <div className={styles.wrapper}>
                <div className={styles.contentLeft}>
                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src='../../../assets/experience/html.png' alt='HTML'></img>
                        </div>
                        <h2>HTML</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src='../../../assets/experience/css.png' alt='CSS'></img>
                        </div>
                        <h2>CSS</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src='../../../assets/experience/js.png' alt='Javascript'></img>
                        </div>
                        <h2>Javascript</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src='../../../assets/experience/react.png' alt='React'></img>
                        </div>
                        <h2>React</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src='../../../assets/experience/node.png' alt='NodeJs'></img>
                        </div>
                        <h2>NodeJS</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src='../../../assets/experience/icons8-mysql-144.png' alt='MySQL'></img>
                        </div>
                        <h2>MySQL</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src='../../../assets/experience/java.png' alt='NodeJs'></img>
                        </div>
                        <h2>Java</h2>
                    </div>

                    <div className={styles.experienceImageList}>
                        <div className={styles.experienceImageBg}>
                            <img src='../../../assets/experience/figma.png' alt='Figma'></img>
                        </div>
                        <h2>Figma</h2>
                    </div>
                </div>
                <div className={styles.contentRight}>
                    <div className={styles.contentRightWrapper}>
                        <img src='../../../assets/experience/um.png' alt='um logo'/>
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
                        <img src='../../../assets/experience/um.png' alt='um logo'/>
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
                        <img src='../../../assets/experience/um.png' alt='um logo'/>
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
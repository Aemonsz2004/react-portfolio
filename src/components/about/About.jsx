import styles from './about.module.css'
import backendImage from "../../../assets/about/backend.png";
import cursorImage from "../../../assets/about/cursor.png";
import frontendImage from "../../../assets/about/frontend.png";
import oioiCat1Image from "../../../assets/about/oioi-cat.png";


const About = () => {
  return (
    <section className={styles.mainContainer}>
        <div className={styles.container}>
            <h1>ABOUT</h1>
            <div className={styles.wrapper}>
                <img className={styles.imageLeft}
                    src={oioiCat1Image}
                    alt='I miss you'
                    />
                <div className={styles.rightContent}>
                    <div className={styles.rightContentList}>
                        <img src={cursorImage} alt='cursor icon'></img>

                        <div>
                            <h2>
                                Fontend Developer
                            </h2>
                            <p>
                                I&apos;m a front-end developer with experience in building responsive websites
                            </p>
                        </div>
                        

                    </div>
                    <div className={styles.rightContentList}>
                        <img src={backendImage} alt='backend icon'></img>
                        <div>
                            <h2>
                                Backend Developer
                            </h2>
                            <p>
                                I have experience developing fast and optimized back-end sytems and APIs
                            </p>
                        </div>
                        
                    </div>
                    <div className={styles.rightContentList}>
                        <img src={frontendImage} alt='frontend icon'></img>
                        <div>
                            <h2>
                                UI Designer
                            </h2>
                            <p>
                                I have designed multiple landing pages and have created design systems as well
                            </p>
                        </div>
                        
                    </div>
                                        
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
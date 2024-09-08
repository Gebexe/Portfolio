import styles from './aboutStyles.module.css';
import foto from '../../assets/foto.jpg'
import { useTranslation } from 'react-i18next';

function About() {
  const {t, i18n} = useTranslation (); 
  return (
    <section id="about" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={foto}
          className={styles.hero}
          alt="mi foto"
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>
          Gabriel
          <br />
          Palacios
        <h2>{t('developer')}</h2>
        </h1>
        <p className={styles.description}>
        {t('contenido')}
        </p>
        <a href={i18n.language === 'es' ? "https://drive.google.com/file/d/1PfJ2lmltVWDYxDtR330cp-FxpEnSIten/view?usp=sharing" : "https://drive.google.com/file/d/19YQhZ4IsOuFaBkHL7s5oO-vQ8RO97ejW/view?usp=drive_link"} target='_blank' rel="noreferrer">
          <button className="hover">CV</button>

        </a>
      </div>
    </section>
  );
}

export default About;

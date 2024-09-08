import styles from './ProjectsStyles.module.css';
import logo from '../../assets/OBS_Studio_logo.png'
import ProjectCard from '../ProjectCard';
import { useTranslation } from 'react-i18next';

export function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.projectTitle}>{t('Projects')}</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={logo}
          link="https://apiscoreboards.vercel.app/"
          h3={t('project1Title')}
          p={t('project1Descript')}
        />
        
      </div>
    </section>
  );
}

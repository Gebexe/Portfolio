import styles from './ProjectsStyles.module.css';
import logo from '../../assets/OBS_Studio_logo.png'
import ProjectCard from '../ProjectCard';

export function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.projectTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={logo}
          link="https://apiscoreboards.vercel.app/"
          h3="Api Scoreboard para OBS"
          p={`Overlay de scores para juegos de pelea para ser utilizado en apps de streaming
            como OBS se debe utilizar filtro de color #0056b3 para la transparencia`}
        />
        
      </div>
    </section>
  );
}

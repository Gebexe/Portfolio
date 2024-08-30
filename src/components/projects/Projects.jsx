import styles from './ProjectsStyles.module.css';
import ProjectCard from '../ProjectCard';

export function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="https://media.tenor.com/damu8hbJ19YAAAAe/shrug-emoji.png"
          link="https://twitch.com"
          h3="Nada"
          p="Streaming App"
        />
        
      </div>
    </section>
  );
}

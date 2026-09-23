import type { Project } from "@/content/projects";
import { projects } from "@/content/projects";

function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div
      className={`work-artwork work-artwork--${project.image.artwork}`}
      role="img"
      aria-label={project.image.alt}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span className="work-artwork-note" aria-hidden="true">
        CREATIVE PREVIEW <span>/</span> NO PERSON DEPICTED
      </span>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="selected-work" aria-labelledby="work-heading">
      <div className="selected-work-inner">
        <header className="selected-work-heading">
          <p className="selected-work-kicker">A CURATED SELECTION</p>
          <h2 id="work-heading">SELECTED WORK</h2>
          <p className="selected-work-intro">
            A collection in progress. Project information will be added when
            confirmed details are available.
          </p>
        </header>

        <ol className="work-list">
          {projects.map((project, index) => (
            <li
              className={`work-item work-item--${project.number}`}
              key={project.number}
            >
              <article aria-labelledby={`work-title-${project.number}`}>
                <ProjectArtwork project={project} />
                <div className="work-caption">
                  <p className="work-number">{project.number}</p>
                  <div className="work-title-group">
                    <p className="work-category">{project.category}</p>
                    <h3 id={`work-title-${project.number}`}>{project.title}</h3>
                  </div>
                  <p className="work-status">
                    {project.year ?? project.status}
                  </p>
                </div>
                <span className="sr-only">Project {index + 1} placeholder.</span>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

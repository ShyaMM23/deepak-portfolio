import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    number: "01",
    title: "CODE ANALYZER",
    category: "AUTOMATED TESTING",
    description:
        "An automated unit-test generation platform for uploaded Java source code.",
    technologies: "JAVA · SPRING BOOT · JUNIT · MAVEN",
    year: "2025",
    accent: "project-card--lime",
    github: null,
  },

  {
    number: "02",
    title: "ROAD SIGN DETECTION",
    category: "COMPUTER VISION",
    description:
      "A road sign detection system built as a computer vision project with connected applications.",
    technologies: "PYTORCH · COMPUTER VISION · ANDROID",
    year: "2026",
    accent: "project-card--blue",
    github: "https://github.com/ShyaMM23/traffic-sign-project",
  },

  {
    number: "03",
    title: "INVENTORY MANAGEMENT",
    category: "BUSINESS APPLICATION",
    description:
      "An inventory tracking system developed for managing cycle spare parts.",
    technologies: "JAVA · MYSQL",
    year: "2025",
    accent: "project-card--orange",
    github: "https://github.com/ShyaMM23/Inventory-Management-System",
  },

  {
    number: "04",
    title: "RAILWAY TICKET BOOKING",
    category: "CONCURRENCY SYSTEM",
    description:
      "A railway ticket reservation system focused on concurrency and safe resource access using semaphores.",
    technologies: "JAVA · OPERATING SYSTEMS",
    year: "2025",
    accent: "project-card--purple",
    github: "https://github.com/ShyaMM23/Railway-Ticket-Booking-system",
  },
];

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects__heading-line", {
        scrollTrigger: {
          trigger: ".projects__heading",
          start: "top 80%",
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects__list",
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="projects section"
      id="work"
      ref={projectsRef}
    >
      <div className="container">

        {/* TOP */}

        <div className="projects__top">
          <span>WORK / 02</span>

          <span>
            SELECTED PROJECTS
          </span>
        </div>


        {/* HEADING */}

        <div className="projects__heading">

          <div className="projects__heading-mask">
            <h2 className="projects__heading-line">
              SELECTED
            </h2>
          </div>

          <div className="projects__heading-mask">
            <h2 className="projects__heading-line">
              WORK.
            </h2>
          </div>

        </div>


        {/* PROJECT LIST */}

        <div className="projects__list">

          {projects.map((project) => (

            <article
              className={`project-card ${project.accent}`}
              key={project.number}
            >

              {/* PROJECT HEADER */}

              <div className="project-card__top">

                <span>
                  {project.number}
                </span>

                <span>
                  {project.category}
                </span>

                <span>
                  {project.year}
                </span>

              </div>


              {/* PROJECT VISUAL */}

              <div className="project-card__visual">

                <div className="project-card__visual-grid" />

                <span className="project-card__visual-number">
                  {project.number}
                </span>

                <span className="project-card__visual-label">
                  PROJECT / {project.year}
                </span>

              </div>


              {/* PROJECT INFORMATION */}

              <div className="project-card__info">

                <div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>


                {/* PROJECT META */}

                <div className="project-card__meta">

                  <span>
                    {project.technologies}
                  </span>


                  {/* GITHUB LINK */}

                  {project.github ? (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card__explore"
  >
    VIEW PROJECT
    <span>↗</span>
  </a>
) : (
  <span className="project-card__private">
    PRIVATE PROJECT
  </span>
)}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
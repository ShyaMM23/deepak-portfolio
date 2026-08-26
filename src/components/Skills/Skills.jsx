import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    number: "01",
    title: "LANGUAGES",
    skills: [
      "JAVA",
      "PYTHON",
      "JAVASCRIPT",
    ],
  },
  {
    number: "02",
    title: "DEVELOPMENT",
    skills: [
      "REACT",
      "SPRING BOOT",
      "RUBY ON RAILS",
    ],
  },
  {
    number: "03",
    title: "DATA & CLOUD",
    skills: [
      "MYSQL",
      "POSTGRESQL",
      "AWS",
    ],
  },
  {
    number: "04",
    title: "TOOLS & INFRASTRUCTURE",
    skills: [
      "GIT",
      "VS CODE",
      "POSTMAN",
      "MAVEN",
      "DOCKER",
      "REDIS",
    ],
  },
];

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills__heading-line", {
        scrollTrigger: {
          trigger: ".skills__heading",
          start: "top 80%",
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".skills__group", {
        scrollTrigger: {
          trigger: ".skills__groups",
          start: "top 80%",
        },
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="skills section"
      id="skills"
      ref={skillsRef}
    >
      <div className="container">

        {/* TOP */}

        <div className="skills__top">
          <span>SKILLS / 03</span>

          <span>
            WHAT I WORK WITH
          </span>
        </div>


        {/* HEADING */}

        <div className="skills__heading">

          <div className="skills__heading-mask">
            <h2 className="skills__heading-line">
              WHAT I
            </h2>
          </div>

          <div className="skills__heading-mask">
            <h2 className="skills__heading-line">
              WORK
            </h2>
          </div>

          <div className="skills__heading-mask">
            <h2 className="skills__heading-line skills__heading-line--outline">
              WITH.
            </h2>
          </div>

        </div>


        {/* SKILL GROUPS */}

        <div className="skills__groups">

          {skillGroups.map((group) => (
            <div
              className="skills__group"
              key={group.number}
            >

              <div className="skills__group-number">
                {group.number}
              </div>

              <div className="skills__group-content">

                <h3>
                  {group.title}
                </h3>

                <div className="skills__list">

                  {group.skills.map((skill) => (
                    <div
                      className="skills__skill"
                      key={skill}
                    >
                      <span>
                        {skill}
                      </span>

                      <span className="skills__skill-arrow">
                        ↗
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* BOTTOM STATEMENT */}

        <div className="skills__statement">

          <span>
            APPROACH / 04
          </span>

          <p>
            I like learning by building —
            understanding the problem,
            experimenting with the technology,
            and turning the idea into something
            that actually works.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Skills;
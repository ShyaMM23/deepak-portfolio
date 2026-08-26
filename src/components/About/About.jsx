import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about__label", {
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".about__line", {
        scrollTrigger: {
          trigger: ".about__content",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".about__details", {
        scrollTrigger: {
          trigger: ".about__details",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about section"
      id="about"
      ref={aboutRef}
    >
      <div className="container">

        {/* HEADER */}

        <div className="about__header">
          <span className="about__label">
            ABOUT / 01
          </span>

          <span className="about__label">
            A LITTLE ABOUT ME
          </span>
        </div>


        {/* MAIN STATEMENT */}

        <div className="about__content">

          <p className="about__line">
            HI  GUYS I'M 
          </p>

          <p className="about__line about__line--accent">
            DEEPAK SHYAM  VESSLEY K.
          </p>

        </div>


        {/* DETAILS */}

        <div className="about__details">

          {/* WHO I AM */}

          <div className="about__description">

            <span className="about__small-label">
              WHO I AM
            </span>

            <div className="about__text">

              <p>
                An Idea driven Information Technology student
                and software developer who enjoys turning ideas into
                practical software.
              </p>

              <p>
                I like working across different areas of development
                from Java and Spring Boot to React, Python, data
                analytics, and computer vision. I'm especially
                interested in understanding how things work and
                building them myself rather than simply using them.
              </p>

            </div>

          </div>


          {/* CURRENTLY EXPLORING */}

          <div className="about__current">

            <span className="about__small-label">
              CURRENTLY EXPLORING
            </span>

            <div className="about__technologies">

              <span>JAVA</span>
              <span>REACT</span>
              <span>PYTHON</span>
              <span>SPRING BOOT</span>
              <span>RUBY ON RAILS</span>
              <span>POSTGRESQL</span>
              <span>AWS</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
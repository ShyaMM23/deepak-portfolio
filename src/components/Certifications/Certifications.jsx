import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Certifications.css";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    number: "01",
    title: "AWS CERTIFIED AI PRACTITIONER",
    issuer: "AWS",
    date: "FEB 2026",
    credential: "https://www.credly.com/badges/d1aac94e-6cfb-4bc6-8faf-b0a88a4d2312/public_url",
  },

  {
    number: "02",
    title: "SOFTWARE TESTING",
    issuer: "NPTEL · IIIT BANGALORE",
    date: "NOV 2025",
    credential: null,
  },

  {
    number: "03",
    title: "ASSOCIATE IN IT FOUNDATIONS JAVA",
    issuer: "INFOSYS SPRINGBOARD",
    date: "DEC 2025",
    credential: null,
  },

  {
    number: "04",
    title: "DATA ANALYTICS USING PYTHON",
    issuer: "NPTEL · IIT ROORKEE",
    date: "MAY 2025",
    credential: null,
  },

  {
    number: "05",
    title: "ENGLISH FOR TECHNICAL PROFESSIONALS",
    issuer: "IEEE",
    date: "MAY 2024",
    credential: null,
  },

  {
    number: "06",
    title: "PYTHON GAME DEVELOPMENT",
    issuer: "INFOSYS SPRINGBOARD",
    date: "MAY 2024",
    credential: null,
  },

  {
    number: "07",
    title: "FOUNDATIONS OF R SOFTWARE",
    issuer: "NPTEL",
    date: "NOV 2024",
    credential: null,
  },

  {
    number: "08",
    title: "AFFECTIVE COMPUTING",
    issuer: "NPTEL",
    date: "MAY 2026",
    credential: null,
  },
];

function Certifications() {
  const certificationsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".certifications__heading-line", {
        scrollTrigger: {
          trigger: ".certifications__heading",
          start: "top 80%",
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".certification", {
        scrollTrigger: {
          trigger: ".certifications__list",
          start: "top 80%",
        },
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
      });
    }, certificationsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="certifications section"
      id="certifications"
      ref={certificationsRef}
    >
      <div className="container">

        {/* TOP */}

        <div className="certifications__top">
          <span>CERTIFICATIONS / 04</span>

          <span>
            CONTINUOUS LEARNING
          </span>
        </div>


        {/* HEADING */}

        <div className="certifications__heading">

          <div className="certifications__heading-mask">
            <h2 className="certifications__heading-line">
              CERTIFIED
            </h2>
          </div>

          <div className="certifications__heading-mask">
            <h2 className="certifications__heading-line">
              TO KEEP
            </h2>
          </div>

          <div className="certifications__heading-mask">
            <h2 className="certifications__heading-line certifications__heading-line--outline">
              LEARNING.
            </h2>
          </div>

        </div>


        {/* CERTIFICATION LIST */}

        <div className="certifications__list">

          {certifications.map((certification) => (
            <article
              className="certification"
              key={certification.number}
            >

              {/* NUMBER */}

              <div className="certification__number">
                {certification.number}
              </div>


              {/* NAME + ISSUER */}

              <div className="certification__main">

                <h3>
                  {certification.title}
                </h3>

                <span>
                  {certification.issuer}
                </span>

              </div>


              {/* DATE */}

              <div className="certification__date">
                {certification.date}
              </div>


              {/* CREDENTIAL */}

              <div className="certification__action">

                {certification.credential ? (
                  <a
                    href={certification.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification__credential"
                  >
                    <span>
                      VIEW CREDENTIAL
                    </span>

                    <span className="certification__arrow">
                      ↗
                    </span>
                  </a>
                ) : null}

              </div>

            </article>
          ))}

        </div>


        {/* BOTTOM */}

        <div className="certifications__bottom">

          <span>
            LEARNING / 2024 — 2026
          </span>

          <p>
            Certifications are part of the process
            a way to explore new technologies,
            strengthen fundamentals and keep
            learning beyond the classroom.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Certifications;
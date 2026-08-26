import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Achievements.css";

gsap.registerPlugin(ScrollTrigger);
const achievements = [
  {
    number: "01",
    title: "NPTEL SOFTWARE TESTING",
    highlight: "TOP 2%",
    description:
      "Ranked among the top 2% of learners in the NPTEL Software Testing course.",
    year: "2025",
  },
  {
    number: "02",
    title: "MEPCO MANAGEMENT SCHOLARSHIP",
    highlight: "ACADEMIC",
    description:
      "Received the MEPCO Management Scholarship for academic performance.",
    year: "2025",
  },
  {
    number: "03",
    title: "FOOTBALL",
    highlight: "DIVISIONALS ×2",
    description:
      "Reached the divisional level in football twice during my school years.",
    year: "SCHOOL",
  },
];

function Achievements() {
  const achievementsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achievements__heading-line", {
        scrollTrigger: {
          trigger: ".achievements__heading",
          start: "top 80%",
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".achievement", {
        scrollTrigger: {
          trigger: ".achievements__list",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power4.out",
      });
    }, achievementsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="achievements section"
      id="achievements"
      ref={achievementsRef}
    >
      <div className="container">

        {/* TOP */}

        <div className="achievements__top">
          <span>ACHIEVEMENTS / 05</span>
          <span>SELECTED HIGHLIGHTS</span>
        </div>


        {/* HEADING */}

        <div className="achievements__heading">

          <div className="achievements__heading-mask">
            <h2 className="achievements__heading-line">
              BEYOND
            </h2>
          </div>

          <div className="achievements__heading-mask">
            <h2 className="achievements__heading-line">
              THE
            </h2>
          </div>

          <div className="achievements__heading-mask">
            <h2 className="achievements__heading-line achievements__heading-line--outline">
              CODE.
            </h2>
          </div>

        </div>


        {/* ACHIEVEMENTS */}

        <div className="achievements__list">

          {achievements.map((achievement) => (
            <article
              className="achievement"
              key={achievement.number}
            >

              <div className="achievement__number">
                {achievement.number}
              </div>

              <div className="achievement__main">

                <span className="achievement__year">
                  {achievement.year}
                </span>

                <h3>
                  {achievement.title}
                </h3>

                <p>
                  {achievement.description}
                </p>

              </div>

              <div className="achievement__highlight">
                {achievement.highlight}
              </div>

            </article>
          ))}

        </div>


        {/* STATEMENT */}

        <div className="achievements__statement">

          <span>PROGRESS / 01</span>

         <p>
            Technology is only one part of the journey.
            The rest comes from curiosity, competition,
            consistency and the things you learn along 
            the way.
        </p>

        </div>

      </div>
    </section>
  );
}

export default Achievements;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".hero__eyebrow", {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
        })
        .from(
          ".hero__name-line",
          {
            yPercent: 110,
            duration: 1.2,
            stagger: 0.08,
          },
          "-=0.7"
        )
        .from(
          ".hero__description",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".hero__footer",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__grid">

        <div className="hero__eyebrow">
          <span>SOFTWARE DEVELOPER</span>
          <span>INFORMATION TECHNOLOGY · INDIA</span>
        </div>

        <div className="hero__name">

          <div className="hero__name-mask">
            <h1 className="hero__name-line">
              DEEPAK
            </h1>
          </div>

          <div className="hero__name-mask">
            <h1 className="hero__name-line">
              SHYAM
            </h1>
          </div>

        </div>

        <div className="hero__description">
          <p>
            I build software that turns ideas
            <br />
            into useful, real-world solutions.
          </p>

          <span className="hero__year">
            2026
          </span>
        </div>

        <div className="hero__footer">

          <span>
            JAVA · REACT · PYTHON · RAILS
          </span>

          <span className="hero__scroll">
            SCROLL TO EXPLORE
            <span>↓</span>
          </span>

        </div>

      </div>
    </section>
  );
}

export default Hero;
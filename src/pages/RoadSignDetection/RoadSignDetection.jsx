import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./RoadSignDetection.css";

gsap.registerPlugin(ScrollTrigger);

function RoadSignDetection() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".road-page__hero-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.utils.toArray(".road-page__reveal").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="road-page" ref={pageRef}>

      <section className="road-page__hero">

        <div className="road-page__top">
          <span>PROJECT / 02</span>
          <span>COMPUTER VISION</span>
          <span>2026</span>
        </div>

        <div className="road-page__content">

          <span className="road-page__hero-item">
            COMPUTER VISION
          </span>

          <h1 className="road-page__title road-page__hero-item">
            ROAD SIGN
            <br />
            DETECTION
          </h1>

          <p className="road-page__intro road-page__hero-item">
            A computer vision system designed to
            detect and classify road signs using a
            custom-trained model.
          </p>

        </div>

        <div className="road-page__bottom">
          <span>PYTORCH · CNN · ANDROID · WEB</span>
          <span>SCROLL ↓</span>
        </div>

      </section>


      <section className="road-page__section">

        <div className="road-page__label">
          <span>01</span>
          OVERVIEW
        </div>

        <div className="road-page__overview road-page__reveal">

          <h2>
            TEACHING
            <br />
            A MODEL
            <br />
            TO SEE.
          </h2>

          <div>
            <p>
              This project focuses on road sign
              detection through computer vision
              and a custom-trained neural network.
            </p>

            <p>
              The system connects the trained model
              with application interfaces so that
              detections can be used beyond the
              training environment.
            </p>
          </div>

        </div>

      </section>


      <section className="road-page__dark">

        <div className="road-page__label">
          <span>02</span>
          SYSTEM
        </div>

        <div className="road-page__pipeline road-page__reveal">

          <div>
            <span>01</span>
            <strong>IMAGE</strong>
            <p>Input road scene</p>
          </div>

          <div>→</div>

          <div>
            <span>02</span>
            <strong>MODEL</strong>
            <p>Neural network</p>
          </div>

          <div>→</div>

          <div>
            <span>03</span>
            <strong>DETECTION</strong>
            <p>Identify sign</p>
          </div>

          <div>→</div>

          <div>
            <span>04</span>
            <strong>APPLICATION</strong>
            <p>Display result</p>
          </div>

        </div>

      </section>


      <section className="road-page__section">

        <div className="road-page__label">
          <span>03</span>
          TECHNOLOGY
        </div>

        <div className="road-page__technology road-page__reveal">

          <h2>THE STACK</h2>

          <div>
            <span>PYTORCH</span>
            <span>PYTHON</span>
            <span>COMPUTER VISION</span>
            <span>CNN</span>
            <span>ANDROID</span>
            <span>WEB</span>
          </div>

        </div>

      </section>


      <section className="road-page__visual">

        <div className="road-page__sign road-page__reveal">
          <span>DETECTED</span>
          <strong>ROAD SIGN</strong>
          <small>COMPUTER VISION</small>
        </div>

      </section>


      <section className="road-page__section">

        <div className="road-page__label">
          <span>04</span>
          APPROACH
        </div>

        <div className="road-page__approach road-page__reveal">

          <h2>
            FROM
            <br />
            DATA
            <br />
            TO
            <br />
            DETECTION.
          </h2>

          <p>
            The project brings together dataset
            preparation, model training, evaluation
            and application integration into a
            single computer vision workflow.
          </p>

        </div>

      </section>


      <section className="road-page__end">

        <span>NEXT PROJECT</span>

        <h2>
          INVENTORY
          <br />
          MANAGEMENT ↗
        </h2>

      </section>

    </main>
  );
}

export default RoadSignDetection;
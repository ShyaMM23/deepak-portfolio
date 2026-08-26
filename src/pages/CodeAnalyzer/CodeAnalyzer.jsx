import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CodeAnalyzer.css";

gsap.registerPlugin(ScrollTrigger);

function CodeAnalyzer() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".case-study__hero-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.utils.toArray(".case-study__reveal").forEach((element) => {
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
    <main className="case-study" ref={pageRef}>

      {/* HERO */}

      <section className="case-study__hero">
        <div className="case-study__hero-top">
          <span>PROJECT / 01</span>
          <span>2025</span>
        </div>

        <div className="case-study__hero-content">

          <span className="case-study__hero-item">
            AUTOMATED TESTING
          </span>

          <h1 className="case-study__title case-study__hero-item">
            CODE
            <br />
            ANALYZER
          </h1>

          <p className="case-study__intro case-study__hero-item">
            An automated unit-test generation platform
            designed to reduce the effort involved in
            creating tests for Java source code.
          </p>

        </div>

        <div className="case-study__hero-bottom">
          <span>JAVA · SPRING BOOT · REST API</span>
          <span>SCROLL ↓</span>
        </div>
      </section>


      {/* OVERVIEW */}

      <section className="case-study__section">
        <div className="case-study__section-label">
          <span>01</span>
          OVERVIEW
        </div>

        <div className="case-study__overview case-study__reveal">

          <h2>
            TURNING
            <br />
            SOURCE CODE
            <br />
            INTO TESTS.
          </h2>

          <div>
            <p>
              Code Analyzer focuses on automating the
              repetitive process of generating unit tests
              for Java source code.
            </p>

            <p>
              The system accepts source code, processes
              it through a backend service and produces
              generated test cases.
            </p>
          </div>

        </div>
      </section>


      {/* PROCESS */}

      <section className="case-study__section case-study__section--dark">

        <div className="case-study__section-label">
          <span>02</span>
          PROCESS
        </div>

        <div className="case-study__flow case-study__reveal">

          <div className="flow-step">
            <span>01</span>
            <strong>UPLOAD</strong>
            <p>Java source code</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step">
            <span>02</span>
            <strong>ANALYZE</strong>
            <p>Process source</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step">
            <span>03</span>
            <strong>GENERATE</strong>
            <p>Create tests</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step">
            <span>04</span>
            <strong>REPORT</strong>
            <p>Test results</p>
          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}

      <section className="case-study__section">

        <div className="case-study__section-label">
          <span>03</span>
          TECHNOLOGY
        </div>

        <div className="case-study__tech case-study__reveal">

          <h2>BUILT WITH</h2>

          <div className="tech-list">
            <span>JAVA</span>
            <span>SPRING BOOT</span>
            <span>REST APIs</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
            <span>JSON</span>
          </div>

        </div>

      </section>


      {/* VISUAL */}

      <section className="case-study__visual-section">

        <div className="code-window case-study__reveal">

          <div className="code-window__bar">
            <span />
            <span />
            <span />
          </div>

          <div className="code-window__content">

            <span className="code-comment">
              // generated test
            </span>

            <span>
              @Test
            </span>

            <span>
              void testUserCreation() {"{"}
            </span>

            <span className="code-indent">
              User user = new User();
            </span>

            <span className="code-indent">
              assertNotNull(user);
            </span>

            <span>
              {"}"}
            </span>

          </div>

        </div>

      </section>


      {/* WHAT I BUILT */}

      <section className="case-study__section">

        <div className="case-study__section-label">
          <span>04</span>
          CONTRIBUTION
        </div>

        <div className="case-study__contribution case-study__reveal">

          <h2>
            FROM IDEA
            <br />
            TO WORKING
            <br />
            SOFTWARE.
          </h2>

          <p>
            The project combines a Java backend with
            REST-based communication and a web interface
            to create a complete automated testing workflow.
          </p>

        </div>

      </section>


      {/* FOOTER */}

      <section className="case-study__end">

        <span>NEXT PROJECT</span>

        <h2>
          ROAD SIGN
          <br />
          DETECTION ↗
        </h2>

      </section>

    </main>
  );
}

export default CodeAnalyzer;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCode,
} from "react-icons/fi";

import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact__heading-line", {
        scrollTrigger: {
          trigger: ".contact__heading",
          start: "top 80%",
        },
        yPercent: 100,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".contact__item", {
        scrollTrigger: {
          trigger: ".contact__links",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power4.out",
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="contact section"
      id="contact"
      ref={contactRef}
    >
      <div className="container">

        {/* TOP */}

        <div className="contact__top">
          <span>CONTACT / 06</span>
          <span>LET'S CONNECT</span>
        </div>


        {/* MAIN HEADING */}

        <div className="contact__heading">

          <div className="contact__heading-mask">
            <h2 className="contact__heading-line">
              HAVE A
            </h2>
          </div>

          <div className="contact__heading-mask">
            <h2 className="contact__heading-line">
              PROJECT
            </h2>
          </div>

          <div className="contact__heading-mask">
            <h2 className="contact__heading-line">
              IN MIND?
            </h2>
          </div>

        </div>


        {/* LET'S TALK */}

        <a
          href="mailto:10727deepak@gmail.com"
          className="contact__cta"
        >
          <span>LET'S TALK</span>

          <span className="contact__cta-arrow">
            <FiArrowUpRight />
          </span>
        </a>


        {/* CONTACT LINKS */}

        <div className="contact__links">

          {/* EMAIL */}

          <a
            href="mailto:10727deepak@gmail.com"
            className="contact__item"
          >
            <span className="contact__item-icon">
              <FiMail />
            </span>

            <span className="contact__item-label">
              EMAIL
            </span>

            <span className="contact__item-value">
              10727deepak@gmail.com
            </span>

            <FiArrowUpRight className="contact__item-arrow" />
          </a>


          {/* GITHUB */}

          <a
            href="https://github.com/ShyaMM23"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <span className="contact__item-icon">
              <FiGithub />
            </span>

            <span className="contact__item-label">
              GITHUB
            </span>

            <span className="contact__item-value">
              github.com/ShyaMM23
            </span>

            <FiArrowUpRight className="contact__item-arrow" />
          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/deepak-shyam-vessley-k-73284a287/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <span className="contact__item-icon">
              <FiLinkedin />
            </span>

            <span className="contact__item-label">
              LINKEDIN
            </span>

            <span className="contact__item-value">
              linkedin.com/in/deepak-shyam-vessley-k-73284a287
            </span>

            <FiArrowUpRight className="contact__item-arrow" />
          </a>


          {/* LEETCODE */}

          <a
            href="https://leetcode.com/u/Deepak_shyam/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <span className="contact__item-icon">
              <FiCode />
            </span>

            <span className="contact__item-label">
              LEETCODE
            </span>

            <span className="contact__item-value">
              leetcode.com/u/Deepak_shyam
            </span>

            <FiArrowUpRight className="contact__item-arrow" />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
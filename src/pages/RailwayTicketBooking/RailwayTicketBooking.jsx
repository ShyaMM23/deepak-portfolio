import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./RailwayTicketBooking.css";

gsap.registerPlugin(ScrollTrigger);

function RailwayTicketBooking() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".railway__hero-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.utils.toArray(".railway__reveal").forEach((element) => {
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
    <main className="railway" ref={pageRef}>

      <section className="railway__hero">

        <div className="railway__top">
          <span>PROJECT / 04</span>
          <span>CONCURRENCY SYSTEM</span>
          <span>2025</span>
        </div>

        <div>

          <span className="railway__hero-item">
            OPERATING SYSTEMS
          </span>

          <h1 className="railway__title railway__hero-item">
            RAILWAY
            <br />
            TICKET BOOKING
          </h1>

          <p className="railway__intro railway__hero-item">
            A ticket reservation system designed
            around concurrency and safe resource
            access using semaphores.
          </p>

        </div>

        <div className="railway__bottom">
          <span>JAVA · OPERATING SYSTEMS · SEMAPHORES</span>
          <span>SCROLL ↓</span>
        </div>

      </section>


      <section className="railway__section">

        <div className="railway__label">
          <span>01</span>
          OVERVIEW
        </div>

        <div className="railway__overview railway__reveal">

          <h2>
            MANY
            <br />
            REQUESTS.
            <br />
            ONE RESOURCE.
          </h2>

          <div>

            <p>
              The project explores the problem of
              multiple processes attempting to access
              shared resources during ticket booking.
            </p>

            <p>
              Semaphores are used to control access
              and support safe concurrent operations.
            </p>

          </div>

        </div>

      </section>


      <section className="railway__dark">

        <div className="railway__label">
          <span>02</span>
          CONCURRENCY
        </div>

        <div className="railway__concurrency railway__reveal">

          <div className="railway__train">
            <span>TRAIN</span>
            <strong>AVAILABLE SEATS</strong>
          </div>

          <div className="railway__lock">
            <span>SEMAPHORE</span>
            <strong>LOCK</strong>
          </div>

          <div className="railway__requests">
            <span>REQUEST 01</span>
            <span>REQUEST 02</span>
            <span>REQUEST 03</span>
          </div>

        </div>

      </section>


      <section className="railway__section">

        <div className="railway__label">
          <span>03</span>
          TECHNOLOGY
        </div>

        <div className="railway__technology railway__reveal">

          <h2>THE STACK</h2>

          <div>
            <span>JAVA</span>
            <span>OPERATING SYSTEMS</span>
            <span>SEMAPHORES</span>
            <span>CONCURRENCY</span>
          </div>

        </div>

      </section>


      <section className="railway__visual">

        <div className="railway__ticket railway__reveal">

          <span>RAILWAY TICKET</span>

          <strong>
            CONFIRMED
          </strong>

          <small>
            RESOURCE ACCESS CONTROLLED
          </small>

        </div>

      </section>


      <section className="railway__section">

        <div className="railway__label">
          <span>04</span>
          CORE CONCEPT
        </div>

        <div className="railway__concept railway__reveal">

          <h2>
            CONTROL
            <br />
            ACCESS.
            <br />
            PROTECT
            <br />
            RESOURCES.
          </h2>

          <p>
            The project demonstrates how operating
            system synchronization concepts can be
            applied to a practical reservation problem.
          </p>

        </div>

      </section>


      <section className="railway__end">

        <span>BACK TO WORK</span>

        <a href="/#work">
          VIEW ALL PROJECTS ↗
        </a>

      </section>

    </main>
  );
}

export default RailwayTicketBooking;
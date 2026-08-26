import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./InventoryManagement.css";

gsap.registerPlugin(ScrollTrigger);

function InventoryManagement() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".inventory__hero-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.utils.toArray(".inventory__reveal").forEach((element) => {
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
    <main className="inventory" ref={pageRef}>

      <section className="inventory__hero">

        <div className="inventory__top">
          <span>PROJECT / 03</span>
          <span>BUSINESS APPLICATION</span>
          <span>2025</span>
        </div>

        <div className="inventory__content">

          <span className="inventory__hero-item">
            INVENTORY SYSTEM
          </span>

          <h1 className="inventory__title inventory__hero-item">
            INVENTORY
            <br />
            MANAGEMENT
          </h1>

          <p className="inventory__intro inventory__hero-item">
            An inventory tracking system developed
            for Venus Engg Works to manage
            cycle spare parts.
          </p>

        </div>

        <div className="inventory__bottom">
          <span>JAVA · MYSQL</span>
          <span>SCROLL ↓</span>
        </div>

      </section>


      <section className="inventory__section">

        <div className="inventory__label">
          <span>01</span>
          OVERVIEW
        </div>

        <div className="inventory__overview inventory__reveal">

          <h2>
            MAKING
            <br />
            INVENTORY
            <br />
            EASIER.
          </h2>

          <div>
            <p>
              The system was developed to help
              manage inventory for cycle spare parts.
            </p>

            <p>
              It focuses on creating a practical
              software solution for inventory tracking.
            </p>
          </div>

        </div>

      </section>


      <section className="inventory__dark">

        <div className="inventory__label">
          <span>02</span>
          SYSTEM
        </div>

        <div className="inventory__dashboard inventory__reveal">

          <div className="inventory__window-top">
            <span>INVENTORY SYSTEM</span>
            <span>● ACTIVE</span>
          </div>

          <div className="inventory__stats">

            <div>
              <small>PARTS</small>
              <strong>INVENTORY</strong>
            </div>

            <div>
              <small>SYSTEM</small>
              <strong>TRACKING</strong>
            </div>

            <div>
              <small>STACK</small>
              <strong>JAVA + MYSQL</strong>
            </div>

          </div>

        </div>

      </section>


      <section className="inventory__section">

        <div className="inventory__label">
          <span>03</span>
          TECHNOLOGY
        </div>

        <div className="inventory__technology inventory__reveal">

          <h2>BUILT WITH</h2>

          <div>
            <span>JAVA</span>
            <span>MYSQL</span>
          </div>

        </div>

      </section>


      <section className="inventory__visual">

        <div className="inventory__box inventory__reveal">
          <span>INVENTORY</span>
          <strong>PARTS</strong>
          <small>TRACKING SYSTEM</small>
        </div>

      </section>


      <section className="inventory__end">

        <span>NEXT PROJECT</span>

        <h2>
          RAILWAY
          <br />
          BOOKING ↗
        </h2>

      </section>

    </main>
  );
}

export default InventoryManagement;
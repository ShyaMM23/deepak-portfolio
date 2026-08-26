import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CustomCursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.08,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const handleEnter = () => {
      gsap.to(follower, {
        scale: 1.7,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursor, {
        scale: 0.6,
        duration: 0.3,
      });
    };

    const handleLeave = () => {
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .skills__skill, .about__technologies span"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} />
      <div className="custom-cursor-follower" ref={followerRef} />
    </>
  );
}

export default CustomCursor;
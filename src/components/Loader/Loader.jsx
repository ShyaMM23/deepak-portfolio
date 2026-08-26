import { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 3;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 500);
      }

      setProgress(value);
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader">
      <div className="loader__top">
        <span>DEEPAK SHYAM</span>
        <span>PORTFOLIO / 2026</span>
      </div>

      <div className="loader__bottom">
        <span>SOFTWARE DEVELOPER</span>

        <span className="loader__progress">
          {progress}%
        </span>
      </div>
    </div>
  );
}

export default Loader;
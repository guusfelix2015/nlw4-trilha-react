import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteleft, minuterigth] = String(minutes).padStart(2, "0").split("");
  const [secondleft, secondrigth] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteleft}</span>
          <span>{minuterigth}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondleft}</span>
          <span>{secondrigth}</span>
        </div>
      </div>
      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Inciar um ciclo
      </button>
    </div>
  );
}

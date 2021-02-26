import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export function Experiencebar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const porcentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>xp</span>
      <div>
        <div style={{ width: `${porcentToNextLevel}` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${porcentToNextLevel}` }}
        >
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}

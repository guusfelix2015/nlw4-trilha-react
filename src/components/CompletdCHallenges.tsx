import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  const { challengesCompletd } = useContext(ChallengesContext);
  return (
    <div className={styles.completdChallegesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompletd}</span>
    </div>
  );
}

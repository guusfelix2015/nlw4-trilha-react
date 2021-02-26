import Head from "next/head";

import { CompletedChallenges } from "../components/CompletdCHallenges";
import { Countdown } from "../components/Countdown";
import { Experiencebar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | moveit</title>
      </Head>
      <Experiencebar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}

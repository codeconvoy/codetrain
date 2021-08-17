import Challenge from '../components/cards/Challenge.js';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import firebase from 'firebase/app';

import styles from '../styles/Learn.module.css';

export default function Learn(props) {
  const [challenges, setChallenges] = useState(undefined);

  async function getChallenges() {
    // get and set challenges data
    const challengesRef = firebase.firestore().collection('challenges');
    const challengesDocs = (await challengesRef.get()).docs;
    setChallenges(challengesDocs.map(doc => ({ ...doc.data(), id: doc.id })));
  }

  // get challenges on start
  useEffect(() => getChallenges, []);

  if (!challenges) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.challenges}>
        {
          challenges.map(challenge =>
            <Challenge {...challenge} key={challenge.id} />
          )
        }
      </div>
      <Link href="/next">
        <a>What&apos;s next?</a>
      </Link>
    </div>
  );
}

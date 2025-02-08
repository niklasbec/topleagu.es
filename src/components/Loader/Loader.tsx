import React from 'react';
import styles from './Loader.module.css';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <i className={styles.footballIcon}>
        <Image src="./soccerBall.svg" width={50} height={50} alt="football loader" />
      </i>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default Loader;

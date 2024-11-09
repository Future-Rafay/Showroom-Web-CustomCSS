import Link from 'next/link';
import styles from '../styles/HeroHome.module.css'; // Ensure the path is correct

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Discover Your Perfect Toyota</h1>
        <p className={styles.heroDescription}>
          Explore our wide range of Toyota vehicles and find the one that fits your lifestyle.
        </p>
        <Link href="/sedan">
          <button className={styles.ctaButton}>Explore Sedan Models</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;

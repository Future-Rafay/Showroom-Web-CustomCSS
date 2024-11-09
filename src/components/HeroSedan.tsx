import Link from 'next/link';
import styles from '../styles/HeroSedan.module.css'; // Ensure the path is correct

const SedanHeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Explore Our Sedan Collection</h1>
        <p className={styles.heroDescription}>
          Discover the perfect sedan for your daily commute or family trips. Your Toyota sedan awaits!
        </p>
        <Link href="/sedan">
          <button className={styles.ctaButton}>View All Sedans</button>
        </Link>
      </div>
    </div>
  );
};

export default SedanHeroBanner;

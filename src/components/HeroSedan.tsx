import styles from "../styles/HeroSedan.module.css"; // Ensure the path is correct

const SedanHeroBanner = () => {
  return (
    <>
      <div className={styles.heroContent}>
      <div className={styles.heroBanner}></div>
        <h1 className={styles.heroTitle}>Explore Our Sedan Collection</h1>
        <p className={styles.heroDescription}>
          Discover the perfect sedan for your daily commute or family trips.
          Your Toyota sedan awaits!
        </p>
      </div>
    </>
  );
};

export default SedanHeroBanner;

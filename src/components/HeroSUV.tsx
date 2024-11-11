import styles from "../styles/HeroSUV.module.css"; // Ensure the path is correct

const SUVHeroBanner = () => {
  return (
    <>
    <div className={styles.heroContent}>
    <div className={styles.heroBanner}></div>
        <h1 className={styles.heroTitle}>Explore Our SUV Collection</h1>
        <p className={styles.heroDescription}>
          Discover the power and luxury of our Toyota SUVs. Perfect for
          adventures and family road trips.
        </p>
      </div>
      </>
  );
};

export default SUVHeroBanner;

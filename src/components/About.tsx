import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>About Us</h2>
      <p className={styles.description}>
        At Toyota Showroom, we provide a wide selection of top-quality Toyota
        vehicles. Our team is dedicated to helping you find the car of your
        dreams.
      </p>
    </div>
  );
};

export default About;

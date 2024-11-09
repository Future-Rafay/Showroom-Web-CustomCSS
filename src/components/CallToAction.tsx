// CallToAction.tsx
import Link from 'next/link';
import styles from '../styles/CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>Ready to Drive Your Dream Toyota?</h2>
      <p className={styles.ctaDescription}>
        Book a test drive today and experience the power and luxury of our vehicles firsthand.
      </p>
      <Link href="/booking">
        <button className={styles.ctaButton}>Book a Test Drive</button>
      </Link>
    </div>
  );
};

export default CallToAction;

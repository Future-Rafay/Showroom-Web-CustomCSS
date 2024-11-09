import Link from 'next/link';
import styles from '../styles/HeroBooking.module.css'; // Ensure the path is correct

const BookingHeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Book Your Toyota Test Drive Today</h1>
        <p className={styles.heroDescription}>
          Experience the thrill of driving your dream car. Book a test drive now and feel the difference.
        </p>
        <Link href="/booking">
          <button className={styles.ctaButton}>Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default BookingHeroBanner;

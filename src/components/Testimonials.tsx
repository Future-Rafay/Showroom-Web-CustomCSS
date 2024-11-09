// Testimonials.tsx
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>What Our Customers Are Saying</h2>
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          "The best car-buying experience! The team was so helpful, and I love my new Toyota!"
        </p>
        <p className={styles.customerName}>- Sarah L.</p>
      </div>
    </div>
  );
};

export default Testimonials;
    
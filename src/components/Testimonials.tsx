// Testimonials.tsx
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <>
    <h2 className={styles.Title}>What Our Customers Are Saying</h2>
    <div className={styles.testimonialsSection}>
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>"The best experience! The team made everything so easy, and I couldn't be happier with my new Toyota!"<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- James P.</p>
      </div>
  
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>"Incredible customer service and a great selection of cars! I’m thrilled with my purchase!"<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- Laura M.</p>
      </div>
  
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>"I had a seamless car-buying experience! The team was knowledgeable and patient. Highly recommend!"<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- Michael T.</p>
      </div>
  
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>"I’m absolutely in love with my new Toyota. The entire process was stress-free and straightforward!"<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- Emily W.</p>
      </div>
  
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>"From start to finish, it was a wonderful experience. I found the perfect car for my needs!"<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- David F.</p>
      </div>
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>"IT" was a wonderful experience. I found the perfect car for my needs!"<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- Jhon Fred.</p>
      </div>
    </div>
  </>
  
  );
};

export default Testimonials;

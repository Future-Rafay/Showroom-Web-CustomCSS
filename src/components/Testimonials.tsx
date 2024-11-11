// Testimonials.tsx
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <>
    <h2 className={styles.Title}>What Our Customers Are Saying</h2>
    <div className={styles.testimonialsSection}>
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>&#34;The best experience! The team made everything so easy, and I couldn&#39;t be happier with my new Toyota!&#34;<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- James P.</p>
      </div>
  
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>&#34;Incredible customer service and a great selection of cars! I’m thrilled with my purchase!&#34;<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- Laura M.</p>
      </div>
  
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>&#34;I had a seamless car-buying experience! The team was knowledgeable and patient. Highly recommend!&#34;<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- Michael T.</p>
      </div>
  
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>&#34;I’m absolutely in love with my new Toyota. The entire process was stress-free and straightforward!&#34;<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- Emily W.</p>
      </div>
  
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>&#34;From start to finish, it was a wonderful experience. I found the perfect car for my needs!&#34;<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- David F.</p>
      </div>
      <div className={styles.testimonialCard}>
        <p className={styles.testimonialText}>
          <span className={styles.qoute}>&#34;</span>&#34;IT was a wonderful experience. I found the perfect car for my needs!&#34;<span className={styles.qoute}>&#34;</span>
        </p>
        <p className={styles.customerName}>- Jhon Fred.</p>
      </div>
    </div>
  </>
  
  );
};

export default Testimonials;

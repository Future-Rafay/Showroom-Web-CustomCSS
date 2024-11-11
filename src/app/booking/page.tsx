import Testimonials from "@/components/Testimonials";
import styles from "./page.module.css"; // Importing CSS module for this page
import BookingHeroBanner from "@/components/HeroBooking";

const Booking = () => {
  return (
    <div className={styles.container}>
      <BookingHeroBanner />
      <Testimonials />
      <section className={styles.bookingInfo}>
        <h2>How to Book Your Toyota</h2>
        <p>Follow these easy steps to book your dream car:</p>
        <ol className={styles.bookingSteps}>
          <li>Choose your desired Toyota model.</li>
          <li>Fill out the booking form with your personal details.</li>
          <li>Choose your preferred payment method.</li>
          <li>Confirm your booking and submit.</li>
        </ol>
        <p>
          Once you&#39;ve completed the form, our team will get in touch with
          you to confirm your order and provide further instructions.
        </p>
      </section>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Drive Your Dream Toyota</h1>
          <p>
            Book your favorite Toyota model today and experience excellence.
          </p>
        </div>
      </section>

      <section className={styles.bookingForm}>
        <h2>Book Your Toyota Now</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="carModel">Select Car Category:</label>
            <select id="carModel" name="carModel">
              <option value="sedan">Sedan</option>
              <option value="SUV">SUV</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="model">Enter Car Model:</label>
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Enter Car Name or Model"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select id="paymentMethod" name="paymentMethod">
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>
              Confirm Booking
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Booking;

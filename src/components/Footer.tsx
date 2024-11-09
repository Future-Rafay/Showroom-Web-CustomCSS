import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href="/privacy-policy" className={styles.footerLink}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className={styles.footerLink}>
          Terms of Service
        </Link>
        <Link href="/contact" className={styles.footerLink}>
          Contact
        </Link>
      </div>
      <p className={styles.footerText}>
        &copy; {new Date().getFullYear()} Toyota Showroom. All rights reserved.
      </p>
      
    </footer>
  );
};

export default Footer;

import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1><Link href="/" className={styles.navLink}>Toyota Showroom</Link></h1>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}><Link href="/sedan" className={styles.navLink}>Sedan</Link></li>
          <li className={styles.navItem}><Link href="/suv" className={styles.navLink}>SUV</Link></li>
          <li className={styles.navItem}><Link href="/booking" className={styles.navLink}>Booking</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

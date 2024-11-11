// FeaturedCategories.tsx
import Link from 'next/link';
import styles from '../styles/FeaturedCategories.module.css';
import Image from 'next/image';

const FeaturedCategories = () => {
  return (
    <div className={styles.categoriesSection}>
      <h2 className={styles.sectionTitle}>Featured Categories</h2>
      <div className={styles.categoriesGrid}>
        <div className={styles.categoryCard}>
          <Link href="/sedan">
            <Image src="/images/sedan/Camry.png" alt="Sedan" className={styles.categoryImage} />
            <h3>Sedan Cars</h3>
          </Link>
        </div>
        <div className={styles.categoryCard}>
          <Link href="/suv">
            <Image src="/images/suv/highlander.png" alt="SUV" className={styles.categoryImage} />
            <h3>SUV Cars</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;

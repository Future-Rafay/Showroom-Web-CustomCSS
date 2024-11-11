import React from 'react';
import styles from '../styles/CarCard.module.css';
import Image from 'next/image';

interface CarCardProps {
  name: string;
  image: string;
  price: string;
  description: string;
}

const CarCard: React.FC<CarCardProps> = ({ description, name, image, price }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={300} height={220} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <h3 className={styles.description}>{description}</h3>
        <p className={styles.price}>{price}</p>
        <button className={styles.detailsButton}>View Details</button>
      </div>
    </div>
  );
};

export default CarCard;

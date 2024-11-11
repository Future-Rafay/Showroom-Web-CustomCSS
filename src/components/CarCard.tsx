import React from 'react';
import styles from '../styles/CarCard.module.css';

interface CarCardProps {
  name: string;
  image: string;
  price: string;
  description: string;
}

const CarCard: React.FC<CarCardProps> = ({ description, name, image, price }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
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

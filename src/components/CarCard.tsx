// import Link from 'next/link';
// import styles from '../styles/CarCard.module.css';
// import Image from 'next/image';

// type CarCardProps = {
//   name: string;
//   price: string;
//   description: string;
//   imageUrl: string;
//   categoryLink: string;
// };

// const CarCard = ({ name, price, description, imageUrl, categoryLink }: CarCardProps) => {
//   return (
//     <div className={styles.card}>
//       <Image src={`/images/${imageUrl}`} alt={name} width={400} height={250} className={styles.carImage} />
//       <div className={styles.cardContent}>
//         <h3 className={styles.carName}>{name}</h3>
//         <p className={styles.price}>{price}</p>
//         <p className={styles.description}>{description}</p>
//         <Link href={categoryLink} className={styles.learnMoreButton}>Learn More</Link>
//       </div>
//     </div>
//   );
// };

// export default CarCard;

import Image from 'next/image';
import styles from '../styles/CarCard.module.css';
import Link from 'next/link';

interface CarCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  carLink: string;
}

const CarCard: React.FC<CarCardProps> = ({ name, description, price, image, carLink }) => {
  return (
    <div className="car-card">
      <Image src={image} alt={name} width={400} height={200} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <Link href={carLink}>
        <button>Learn More</button>
      </Link>
    </div>
  );
};

export default CarCard;


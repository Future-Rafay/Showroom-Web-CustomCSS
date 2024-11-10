
import Image from 'next/image';
// import styles from '../styles/CarCard.module.css';
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


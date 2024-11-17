import SedanHeroBanner from "@/components/HeroSedan";
import CarCard from "../../components/CarCard"; // Adjust the path to CarCard if necessary
import styles from "./page.module.css"; // Adjust the path for styles

const SedanPage = () => {
  const cars = [
    {
      name: "Toyota Camry",
      description: "A luxury sedan known for its comfort and reliability.",
      price: "$35,000",
      image: "/images/sedan/Camry.png",
    },
    {
      name: "Toyota Prius",
      description:
        "A hybrid sedan offering great fuel efficiency and modern design.",
      price: "$30,000",
      image: "/images/sedan/prius2.jpg",
    },
    {
      name: "Toyota Corolla",
      description:
        "A stylish, compact sedan with premium features and technology.",
      price: "$28,000",
      image: "/images/sedan/corolla3.jpg",
    },
    {
      name: "Toyota Camry",
      description:
        "Elegant and spacious, perfect for both city and highway driving.",
      price: "$36,500",
      image: "/images/sedan/camry2.png",
    },
    {
      name: "Toyota Prius",
      description:
        "Environmentally friendly and spacious with cutting-edge safety.",
      price: "$29,500",
      image: "/images/sedan/prius3.jpg",
    },
    {
      name: "Toyota Corolla",
      description:
        "An agile sedan that combines fuel efficiency with a smooth ride.",
      price: "$27,500",
      image: "/images/sedan/corolla2.png",
    },
    {
      name: "Toyota Crown",
      description:
        "A flagship luxury sedan blending advanced technology and style.",
      price: "$45,000",
      image: "/images/sedan/crown.jpg",
    },
    {
      name: "Toyota Prius",
      description: "Compact yet spacious, designed for eco-conscious drivers.",
      price: "$31,000",
      image: "/images/sedan/prius.jpg",
    },
    {
      name: "Toyota Corolla",
      description: "An affordable and durable sedan with refined features.",
      price: "$28,500",
      image: "/images/sedan/corolla.png",
    },
  ];

  return (
    <div className={styles.sedanPage}>
      <SedanHeroBanner />

      <div className={styles.carGrid}>
        {cars.map((car, index) => (
          <CarCard
            key={index}
            name={car.name}
            description={car.description}
            price={car.price}
            image={car.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SedanPage;

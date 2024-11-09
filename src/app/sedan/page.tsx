import SedanHeroBanner from "@/components/HeroSedan";
import CarCard from "../../components/CarCard"; // Adjust the path to CarCard if necessary
import styles from "./page.module.css"; // Adjust the path for styles

const SedanPage = () => {
  const cars = [
    {
      name: "Toyota Camry",
      description: "A comfortable and reliable sedan with modern features.",
      price: "$35,000",
      image: "/images/sedan/camry.png",
      carLink: "/sedan/camry",
    },
    {
      name: "Toyota Prius",
      description:
        "A spacious sedan with great fuel economy and safety features.",
      price: "$30,000",
      image: "/images/sedan/prius.jpg",
      carLink: "/sedan/accord",
    },
    {
      name: "Toyota corolla",
      description:
        "A stylish sedan with a premium feel and advanced technology.",
      price: "$28,000",
      image: "/images/sedan/corolla.png",
      carLink: "/sedan/altima",
    },
  ];

  return (
    <div className={styles.sedanPage}>
      <SedanHeroBanner />
      <h1 className={styles.carCategoryTitle}>Sedan Cars</h1>

      <div className={styles.carGrid}>
        {cars.map((car, index) => (
          <CarCard
            key={index}
            name={car.name}
            description={car.description}
            price={car.price}
            image={car.image}
            carLink={car.carLink}
          />
        ))}
      </div>
      <div className={styles.ctaSection}>
        <h2>Ready to Take a Test Drive?</h2>
        <p>Contact us to book a test drive for any of our Toyota sedans today!</p>
        <button className={styles.ctaButton}>Contact Us</button>
      </div>
    </div>
  );
};

export default SedanPage;

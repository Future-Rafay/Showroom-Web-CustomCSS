
import SUVHeroBanner from "@/components/HeroSUV";
import CarCard from "../../components/CarCard"; // Adjust the path to CarCard if necessary
import styles from "./page.module.css"; // Adjust the path for styles

const SUVPage = () => {
  const cars = [
    {
      name: "Toyota Highlander",
      description: "A spacious and comfortable SUV with modern safety features.",
      price: "$45,000",
      image: "/images/suv/highlander.png",
      carLink: "/suv/highlander",
    },
    {
      name: "Toyota 4Runner",
      description: "A rugged and reliable SUV built for adventure and off-road capability.",
      price: "$40,000",
      image: "/images/suv/4runner.png",
      carLink: "/suv/4runner",
    },
    {
      name: "Toyota RAV4",
      description: "A compact and efficient SUV with excellent fuel economy.",
      price: "$30,000",
      image: "/images/suv/rav4.png",
      carLink: "/suv/rav4",
    },
  ];

  return (
    <div className={styles.suvPage}>
      <SUVHeroBanner />
      <h1 className={styles.carCategoryTitle}>Toyota SUVs</h1>

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
        <h2>Explore Our SUVs</h2>
        <p>Contact us to book a test drive for any of our Toyota SUVs today!</p>
        <button className={styles.ctaButton}>Contact Us</button>
      </div>
    </div>
  );
};

export default SUVPage;

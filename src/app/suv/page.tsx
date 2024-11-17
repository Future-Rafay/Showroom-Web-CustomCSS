import SUVHeroBanner from "@/components/HeroSUV";
import CarCard from "../../components/CarCard"; // Adjust the path to CarCard if necessary
import styles from "./page.module.css"; // Adjust the path for styles

const SUVPage = () => {
  const cars = [
    {
      name: "Toyota Fortuner",
      description:
        "A spacious and durable SUV with off-road capabilities and a modern design.",
      price: "$45,000",
      image: "/images/suv/fortuner.png",
    },
    {
      name: "Toyota Land Cruiser Sahara",
      description: "A luxury SUV built for comfort and off-road performance.",
      price: "$70,000",
      image: "/images/suv/LandCruiser-Sahara.png",
    },
    {
      name: "Toyota Highlander",
      description:
        "A spacious and comfortable SUV with advanced safety features.",
      price: "$45,000",
      image: "/images/suv/highlander.png",
    },
    {
      name: "Toyota Revo",
      description: "A rugged and dependable SUV built for adventure.",
      price: "$40,000",
      image: "/images/suv/revo.png",
    },
    {
      name: "Toyota Raize",
      description:
        "A compact and efficient SUV with stylish design and practicality.",
      price: "$30,000",
      image: "/images/suv/raize.png",
    },
    {
      name: "Toyota Land Cruiser",
      description:
        "A premium SUV with superior off-road capability and luxury features.",
      price: "$85,000",
      image: "/images/suv/landCruiser.png",
    },
    {
      name: "Toyota Innova",
      description:
        "A versatile SUV ideal for families, combining comfort with practicality.",
      price: "$40,000",
      image: "/images/suv/innova.png",
    },
    {
      name: "Toyota RAV4",
      description:
        "A compact SUV with excellent fuel efficiency and modern technology.",
      price: "$30,000",
      image: "/images/suv/rav4.png",
    },
    {
      name: "Toyota 4Runner",
      description:
        "A rugged and reliable SUV, perfect for both city driving and off-road adventures.",
      price: "$40,000",
      image: "/images/suv/4runner.png",
    },
  ];

  return (
    <div className={styles.suvPage}>
      <SUVHeroBanner />
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

export default SUVPage;

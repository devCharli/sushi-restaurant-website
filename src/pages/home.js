import { useState, useEffect } from "react";
import "./css/home.css";
import img1 from "../images/background/kiama1.jpg";
import img2 from "../images/background/kiama2.jpg";
import img3 from "../images/background/kiama3.jpg";
import img4 from "../images/background/kiama4.jpg";
import img5 from "../images/background/kiama5.jpg";

const Home = () => {
  const [slideImages, setSlideImages] = useState([
    { id: 0, src: img5, display: true, alt: "sushi photo" },
    { id: 1, src: img2, display: false, alt: "sushi photo" },
    { id: 2, src: img3, display: false, alt: "sushi photo" },
    { id: 3, src: img4, display: false, alt: "sushi photo" },
    { id: 4, src: img1, display: false, alt: "sushi photo" },
  ]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setIndex(index === slideImages.length - 1 ? 0 : index + 1);
      slideImages.map((img) => {
        if (img.id !== index) {
          Object.assign(img, { display: false });
        } else {
          Object.assign(img, { display: true });
        }
      });
    }, 2500);
  }, [index]);

  return (
    <section className="home" id="home">
      {slideImages.map((img) => (
        <img
          src={img.src}
          key={img.id}
          alt={img.alt}
          className={img.display ? "visible" : "invisible"}
        />
      ))}
      <div className="about">
        <h2>Welcome to Akira sushi!</h2>
        <p>Since 2010</p>
      </div>
    </section>
  );
};

export default Home;

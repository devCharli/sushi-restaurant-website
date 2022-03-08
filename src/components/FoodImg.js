import sushi from "../images/foods/sushi.svg";
import noodle from "../images/foods/noodle.svg";
import meal from "../images/foods/meal.svg";
import donburi from "../images/foods/donburi.svg";
import "./css/FoodImg.css";

const FoodImg = () => {
  return (
    <div className="food-imgs">
      <img src={sushi} alt="sushi" className="food-img" />
      <img src={noodle} alt="noodle" className="food-img" />
      <img src={meal} alt="meal" className="food-img" />
      <img src={donburi} alt="donburi" className="food-img" />
    </div>
  );
};

export default FoodImg;

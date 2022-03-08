import "./css/menu.css";
import Sushi from "./menu/sushi";
import Ramen from "./menu/Ramen";
import Sashimi from "./menu/sashimi";
import Udon from "./menu/udon";
import Donburi from "./menu/donburi";
import Bento from "./menu/bento";
import Meal from "./menu/meal";
import FoodImg from "../components/FoodImg";
const Menu = () => {
  return (
    <section className="menu-section" id="menu">
      <h2>Menu</h2>
      <div className="menu-group first-group">
        <Sushi />
        <Sashimi />
      </div>
      <FoodImg />
      <div className="menu-group">
        <Ramen />
        <Udon />
      </div>
      <Donburi />
      <FoodImg />
      <div className="menu-group">
        <Meal />
        <Bento />
      </div>
    </section>
  );
};

export default Menu;

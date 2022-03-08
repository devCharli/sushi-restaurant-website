const Meal = () => {
  return (
    <div className="menu-box">
      <h3 className="menu-category">
        Meal{" "}
        <span className="menu-description">(Main, rice, salads, Miso)</span>
      </h3>
      <ul className="menu-list">
        <li className="menu-item">
          <p>Teriyaki chicken</p>
          <p>$13.00</p>
        </li>
        <li className="menu-item">
          <p>Chicken katsu</p>
          <p>$13.00</p>
        </li>
        <li className="menu-item">
          <p>
            Bulgogi <span>(Beef)</span>
          </p>
          <p>$13.00</p>
        </li>
        <li className="menu-item">
          <p>Chilli pork</p>
          <p>$13.00</p>
        </li>
        <li className="menu-item">
          <p>
            Unagi <span>(Eel)</span>
          </p>
          <p>$15.00</p>
        </li>
        <li className="menu-item">
          <p>Grilled salmon</p>
          <p>$15.00</p>
        </li>
        <li className="menu-item">
          <p>Teriyaki salmon</p>
          <p>$15.00</p>
        </li>
        <li className="menu-item">
          <p>
            Bibimbab{" "}
            <span className="menu-description bibimbab">
              (mixed fresh vege rice)
            </span>
          </p>
          <p>$15.00</p>
        </li>
      </ul>
    </div>
  );
};

export default Meal;

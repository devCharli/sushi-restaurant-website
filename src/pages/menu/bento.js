const Bento = () => {
  return (
    <div className="menu-box">
      <h3 className="menu-category">
        Bento Box{" "}
        <span className="menu-description">
          (Main, rice, salads, sushi, hotfood)
        </span>
      </h3>
      <ul className="menu-list">
        <li className="menu-item">
          <p>Teriyaki chicken</p>
          <p>$14.00</p>
        </li>
        <li className="menu-item">
          <p>Chicken katsu</p>
          <p>$14.00</p>
        </li>
        <li className="menu-item">
          <p>
            Bulgogi <span>(Beef)</span>
          </p>
          <p>$14.00</p>
        </li>
        <li className="menu-item">
          <p>Chilli pork</p>
          <p>$14.00</p>
        </li>
        <li className="menu-item">
          <p>
            Unagi <span>(Eel)</span>
          </p>
          <p>$16.00</p>
        </li>
        <li className="menu-item">
          <p>Grilled salmon</p>
          <p>$16.00</p>
        </li>
        <li className="menu-item">
          <p>Teriyaki salmon</p>
          <p>$16.00</p>
        </li>
      </ul>
    </div>
  );
};

export default Bento;

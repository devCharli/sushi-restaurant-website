const Sushi = () => {
  return (
    <div className="menu-box">
      <h3 className="menu-category">SUSHI & SASHIMI</h3>
      <ul className="menu-list">
        <li className="menu-item-1">
          <div className="menu-name-price">
            <p>SMALL</p>
            <p>$15.00</p>
          </div>
          <span>4 SUSHI / 4 SASHIMI / 4 ROLLS</span>
        </li>
        <li className="menu-item-1">
          <div className="menu-name-price">
            <p>MEDIUM</p>
            <p>$20.00</p>
          </div>
          <span>6 SUSHI / 6 SASHIMI / 4 ROLLS</span>
        </li>
        <li className="menu-item-1">
          <div className="menu-name-price">
            <p>LARGE</p>
            <p>$28.00</p>
          </div>
          <span>8 SUSHI / 8 SASHIMI / 8 ROLLS</span>
        </li>
      </ul>
    </div>
  );
};

export default Sushi;

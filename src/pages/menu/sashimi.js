const Sashimi = () => {
  return (
    <div className="menu-box">
      <h3 className="menu-category">SUSHI & SASHIMI</h3>
      <ul className="menu-list">
        <li className="menu-item-1">
          <div className="menu-name-price">
            <p>SMALL</p>
            <p>$6.50</p>
          </div>
          <span>5 pieces</span>
        </li>
        <li className="menu-item-1">
          <div className="menu-name-price">
            <p>MEDIUM</p>
            <p>$9.50</p>
          </div>
          <span>8 pieces</span>
        </li>
        <li className="menu-item-1">
          <div className="menu-name-price">
            <p>LARGE</p>
            <p>$14.50</p>
          </div>
          <span>12 pieces</span>
        </li>
      </ul>
    </div>
  );
};

export default Sashimi;

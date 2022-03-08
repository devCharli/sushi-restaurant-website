const Ramen = () => {
  return (
    <div className="menu-box">
      <h3 className="menu-category">Ramen</h3>
      <ul className="menu-list">
        <li className="menu-item">
          <p>PLAIN RAMEN</p>
          <p>$9.00</p>
        </li>
        <li className="menu-item">
          <p>
            NEGI RAMEN <span>SHALLOT</span>
          </p>
          <p>$12.00</p>
        </li>
        <li className="menu-item">
          <p>SEAFOOD RAMEN</p>
          <p>$12.00</p>
        </li>
      </ul>
    </div>
  );
};

export default Ramen;

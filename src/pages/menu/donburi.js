const Donburi = () => {
  return (
    <div className="menu-box donburi-box">
      <h3 className="menu-category">
        Donburi <span className="menu-description">(rice)</span>
      </h3>
      <ul className="menu-list donburi-list">
        <li className="menu-item">
          <p>
            Terikyaki <span className="terikyaki-donburi">chicken don</span>
          </p>
          <p>$10.00</p>
        </li>
        <li className="menu-item">
          <p>
            Oyakodon{" "}
            <span className="menu-description bibimbab">
              (chicken with eggs)
            </span>
          </p>
          <p>$10.00</p>
        </li>
        <li className="menu-item">
          <p>
            Gyudon{" "}
            <span className="menu-description bibimbab">(Beef with eggs)</span>
          </p>
          <p>$10.00</p>
        </li>
        <li className="menu-item">
          <p>
            Ebi don{" "}
            <span className="menu-description bibimbab">
              (fried prawn with eggs)
            </span>
          </p>
          <p>$10.00</p>
        </li>
        <li className="menu-item">
          <p>Chicken katsu don</p>
          <p>$10.00</p>
        </li>
        <li className="menu-item">
          <p>
            Unagi don <span className="menu-description bibimbab">(Eel)</span>
          </p>
          <p>$13.00</p>
        </li>
        <li className="menu-item">
          <p>
            Unatama don{" "}
            <span className="menu-description bibimbab">(Eel with egg)</span>
          </p>
          <p>$13.00</p>
        </li>
      </ul>
    </div>
  );
};

export default Donburi;

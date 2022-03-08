import "./css/location.css";
import Map from "./locationMap";

const Location = () => {
  return (
    <section className="location" id="location">
      <h2>Hours & Location</h2>
      <div className="store">
        <div className="store-info">
          <p>⏰ Mon-Sat 9:00 AM - 5:00 PM</p>
          <p>📞 +61 404 515 076</p>
          <p>📍143 Terralong St, Kiama NSW 253</p>
        </div>
        <div className="store-map">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Location;

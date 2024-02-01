import commercial1 from "../commercial-1.jpg";
import commercial2 from "../commercial-2.jpg";
import commercial3 from "../commercial-3.jpg";

function Commercial() {
  return (
    <div>
      <div className="commercial">
        <h3>Special menu with a special price!</h3>
        <img src={commercial1} alt="special menu" />
        <p>Every Sunday you can buy special menu with 50% discount!</p>
      </div>
      <div className="commercial">
        <h3>Family Menu!</h3>
        <img src={commercial2} alt="special menu" />
        <p>Order a family menu, get your pizza cheper than ever!!!</p>
      </div>
      <div className="commercial">
        <h3>Best Slice Ever!</h3>
        <img src={commercial3} alt="special menu" />
        <p>Grab your slice with one glass of beer with discounted price!</p>
      </div>
    </div>
  );
}
export default Commercial;

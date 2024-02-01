import Commercial from "./Commercial";

function CheckOut() {
  return (
    <div className="checkout">
      <h3>Your cart is empty. </h3>
      <p className="parag">Start adding items to your cart</p>
      <Commercial />
    </div>
  );
}

export default CheckOut;

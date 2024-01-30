import { useState } from "react";
import commercial1 from "./commercial-1.jpg";
import commercial2 from "./commercial-2.jpg";
import commercial3 from "./commercial-3.jpg";

const DigitalMenu = ({ data, handleSelectOtherMenu, selectBeer }) => {
  const [isSelected, setIsSelected] = useState(null);
  const [orderedItems, setOrderedItems] = useState([]);

  const [buttonSelected, setButtonSelected] = useState(false);

  const sumorder = orderedItems.reduce((acc, cur) => acc + cur.price, 0);

  function handleSelection(item) {
    setIsSelected((current) => (current?.id === item.id ? null : item));

    setOrderedItems((orderedItems) => [...orderedItems, item]);
  }

  function handleClickOrderButton() {
    setButtonSelected((change) => !change);
  }

  function handleDeleteItem(id) {
    setOrderedItems((orderedItems) =>
      orderedItems.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="container">
      <div className="container-1">
        <Header data={data} />
        <Button
          style={{ margin: "0 auto", padding: "1rem 1.5rem" }}
          onClick={handleSelectOtherMenu}
        >
          {selectBeer ? "See Pizzas" : "See Beers"}
        </Button>
        <Menu data={data.menudetails} onhandleSelection={handleSelection} />
        <Footer />
      </div>
      <div className="container-2">
        {isSelected ? (
          <Order
            orderedItems={orderedItems}
            isSelected={isSelected}
            key={isSelected.id}
            onhandleDeleteItem={handleDeleteItem}
            buttonSelected={buttonSelected}
            sumorder={sumorder}
            onhandleClickOrderButton={handleClickOrderButton}
          />
        ) : (
          <CheckOut />
        )}
      </div>
    </div>
  );
};

export default DigitalMenu;

function Button({ children, onClick, style }) {
  return (
    <button className="btn" onClick={onClick} style={style}>
      {children}
    </button>
  );
}

function Header({ data }) {
  return (
    <div className="header">
      <div className="header-head">
        <img src={data.logo} alt="logo" />
        <h1>Best Of Town Co.</h1>
      </div>
      <h2>Our {data.menuname} Menu</h2>
      <p>{data.text}</p>
    </div>
  );
}

function Menu({ data, isSelected, onhandleSelection }) {
  return (
    <ul className="menu">
      {data.map((item) => (
        <Item
          item={item}
          isSelected={isSelected}
          onhandleSelection={onhandleSelection}
          key={item.id}
        />
      ))}
    </ul>
  );
}
function Item({ item, isSelected, onhandleSelection }) {
  const selectedItem = isSelected?.id === item.id;

  return (
    <li
      className={
        item.soldOut
          ? " item item-sold-out"
          : selectedItem
          ? "item selected"
          : "item"
      }
    >
      <img src={item.photoName} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>
        <span>{item.soldOut ? "SOLD OUT" : `$${item.price}`}</span>
        <Button onClick={() => onhandleSelection(item)}>Select</Button>
      </div>
    </li>
  );
}

function Order({
  orderedItems,
  isSelected,
  onhandleDeleteItem,
  buttonSelected,
  sumorder,
  onhandleClickOrderButton,
}) {
  return (
    <div className="order-bar">
      <p>🍴Your order from Best of Town Co.</p>
      <p>🍕Food/Drink</p>
      <ul>
        {orderedItems.map((ordered) => (
          <OrderedItem
            ordered={ordered}
            key={ordered.id}
            onhandleDeleteItem={onhandleDeleteItem}
          />
        ))}
      </ul>
      <Button onClick={() => onhandleClickOrderButton()}>
        {buttonSelected ? "Thank You!" : "Complete Order"}
      </Button>
      {buttonSelected && <p>Total: ${sumorder}</p>}
    </div>
  );
}

function OrderedItem({ ordered, onhandleDeleteItem }) {
  return (
    <li>
      <img src={ordered.photoName} alt={ordered.name} />
      <h3>{ordered.name}</h3>
      <p>${ordered.price}</p>
      <Button
        style={{ background: "none" }}
        onClick={() => onhandleDeleteItem(ordered.id)}
      >
        ❌
      </Button>
      {/* <button onClick={onhandleDeleteItem} className="button">
        ❌
      </button> */}
    </li>
  );
}
function CheckOut() {
  return (
    <div className="checkout">
      <h3>Your cart is empty. </h3>
      <p className="parag">Start adding items to your cart</p>
      <Commercial />
    </div>
  );
}
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

function Footer() {
  const hour = new Date().getHours();
  //console.log(hour);

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour <= closeHour && hour >= openHour;

  return (
    <div className="footer">
      {isOpen
        ? `We are open. Order online!`
        : `We are closed now. We will be open between ${
            openHour < 10 ? `0${openHour}:00` : `${openHour}:00`
          } and ${closeHour < 10 ? `0${closeHour}:00` : `${closeHour}:00`}`}
    </div>
  );
}

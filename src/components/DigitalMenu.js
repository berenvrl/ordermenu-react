import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";
import CheckOut from "./Checkout";
import Footer from "./Footer";

const DigitalMenu = ({
  data,
  handleSelectOtherMenu,
  selectBeer,
  setTotalOrderdForCart,
  totalOrdersForCart,
}) => {
  const [isSelected, setIsSelected] = useState(null);
  //const [orderedItems, setOrderedItems] = useState([]);
  const [buttonSelected, setButtonSelected] = useState(false);
  const [clickedselect, setClickSelect] = useState(false);

  function handleSelection(item) {
    setIsSelected((current) => (current?.id !== item.id ? item : current));

    setClickSelect(true);

    //setOrderedItems((orderedItems) => [...orderedItems, item]);

    setTotalOrderdForCart((totalOrdersForCart) => [
      ...totalOrdersForCart,
      item,
    ]);
  }

  function handleClickOrderButton() {
    setButtonSelected((change) => !change);
  }

  function handleDeleteItem(id) {
    setTotalOrderdForCart((totalOrdersForCart) =>
      totalOrdersForCart.filter((item) => item.id !== id)
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
        <Menu
          data={data.menudetails}
          onhandleSelection={handleSelection}
          clickedselect={clickedselect}
        />
        <Footer />
      </div>
      <div className="container-2">
        {isSelected ? (
          <Order
            isSelected={isSelected}
            key={isSelected.id}
            onhandleDeleteItem={handleDeleteItem}
            buttonSelected={buttonSelected}
            onhandleClickOrderButton={handleClickOrderButton}
            totalOrdersForCart={totalOrdersForCart}
            setTotalOrderdForCart={setTotalOrderdForCart}
          />
        ) : (
          <CheckOut />
        )}
      </div>
    </div>
  );
};

export default DigitalMenu;

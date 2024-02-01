import Button from "./Button";
import OrderedItem from "./OrderedItem";

function Order({
  onhandleDeleteItem,
  buttonSelected,
  onhandleClickOrderButton,
  totalOrdersForCart,
  setTotalOrderdForCart,
}) {
  const countOrderedItems = (itemId) => {
    let count = 0;
    for (let i = 0; i < totalOrdersForCart.length; i++) {
      if (totalOrdersForCart[i].id === itemId) {
        count++;
      }
    }
    return count;
  };

  const uniqueOrderedItems = Array.from(
    new Set(totalOrdersForCart.map((item) => item.id))
  ).map((itemId) => {
    const orderedItem = totalOrdersForCart.find((item) => item.id === itemId);

    return {
      ...orderedItem,
      count: countOrderedItems(itemId),
    };
  });

  let totalPrice = totalOrdersForCart.reduce(
    (sum, item) => sum + item.price * item.orderCount,
    0
  );

  return (
    <div className="order-bar">
      <p>🍴Your order from Best of Town Co.</p>
      <p>🍕Food/Drink</p>
      <ul>
        {uniqueOrderedItems.map((ordered) => (
          <OrderedItem
            ordered={ordered}
            key={ordered.id}
            onhandleDeleteItem={onhandleDeleteItem}
            setTotalOrderdForCart={setTotalOrderdForCart}
          />
        ))}
      </ul>
      <Button onClick={() => onhandleClickOrderButton()}>
        {buttonSelected && totalPrice !== 0 ? "Thank You!" : "Complete Order"}
      </Button>
      {buttonSelected && <p> {`Total: $${totalPrice}`}</p>}
    </div>
  );
}

export default Order;

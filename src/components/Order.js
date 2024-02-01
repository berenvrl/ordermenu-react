import Button from "./Button";
import OrderedItem from "./OrderedItem";

function Order({
  orderedItems,
  setOrderedItems,
  onhandleDeleteItem,
  buttonSelected,
  onhandleClickOrderButton,
}) {
  const countOrderedItems = (itemId) => {
    let count = 0;
    for (let i = 0; i < orderedItems.length; i++) {
      if (orderedItems[i].id === itemId) {
        count++;
      }
    }
    return count;
  };

  const uniqueOrderedItems = Array.from(
    new Set(orderedItems.map((item) => item.id))
  ).map((itemId) => {
    const orderedItem = orderedItems.find((item) => item.id === itemId);

    return {
      ...orderedItem,
      count: countOrderedItems(itemId),
    };
  });

  let totalPrice = orderedItems.reduce(
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
            orderedItems={orderedItems}
            setOrderedItems={setOrderedItems}
          />
        ))}
      </ul>
      <Button onClick={() => onhandleClickOrderButton()}>
        {buttonSelected && totalPrice !== 0 ? "Thank You!" : "Complete Order"}
      </Button>
      {buttonSelected && <p> {`Total: ${totalPrice}`}</p>}
    </div>
  );
}

export default Order;

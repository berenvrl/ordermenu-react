import { useEffect, useState } from "react";

function OrderedItem({ ordered, onhandleDeleteItem, setTotalOrderdForCart }) {
  const [updatedCount, setUpdatedCount] = useState(1);

  const handleIncrease = () => {
    setUpdatedCount((count) => count + 1);
  };

  useEffect(() => {
    setTotalOrderdForCart((prevOrderedItems) => {
      const updatedItems = prevOrderedItems.map((item) => {
        if (item.id === ordered.id) {
          return {
            ...item,
            orderCount: updatedCount,
          };
        }
        return item;
      });
      return updatedItems;
    });
  }, [updatedCount, setTotalOrderdForCart]);

  const handleDecrease = () => {
    setUpdatedCount((count) => count - 1);
  };

  return (
    <>
      <li>
        <img src={ordered.photoName} alt={ordered.name} />
        <h3>{ordered.name}</h3>
        <p>${ordered.price * updatedCount}</p>
        <div className="btncontainer">
          <button className="orderCountbtn" onClick={handleDecrease}>
            ➖
          </button>
          <span className="orderedcount">{ordered.orderCount}</span>
          <button className="orderCountbtn" onClick={() => handleIncrease()}>
            ➕
          </button>
        </div>
        <button
          className="deletebtn"
          onClick={() => onhandleDeleteItem(ordered.id)}
        >
          ❌
        </button>
      </li>
    </>
  );
}

export default OrderedItem;

import Button from "./Button";

function Item({ item, isSelected, onhandleSelection, clickedselect }) {
  return (
    <li
      className={
        item.soldOut
          ? " item item-sold-out"
          : isSelected
          ? "item selected"
          : "item"
      }
    >
      <img src={item.photoName} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>
        <span>{item.soldOut ? "SOLD OUT" : `$${item.price}`}</span>
        <Button
          onClick={() => onhandleSelection(item)}
          style={{ borderRadius: "50%", padding: "8px" }}
        >
          ➕
        </Button>
      </div>
    </li>
  );
}
export default Item;

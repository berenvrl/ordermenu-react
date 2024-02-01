import Item from "./Item";

function Menu({ data, isSelected, onhandleSelection, clickedselect }) {
  return (
    <ul className="menu">
      {data.map((item) => (
        <Item
          item={item}
          isSelected={isSelected}
          onhandleSelection={onhandleSelection}
          key={item.id}
          clickedselect={clickedselect}
        />
      ))}
    </ul>
  );
}
export default Menu;

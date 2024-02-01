import React, { useState } from "react";
import DigitalMenu from "./components/DigitalMenu";
import { data } from "./data";

function App() {
  const [selectBeer, setSelectBeer] = useState(false);
  const [totalOrdersForCart, setTotalOrderdForCart] = useState([]);

  function handleSelectOtherMenu() {
    setSelectBeer((select) => !select);
  }

  return (
    <>
      {!selectBeer && (
        <DigitalMenu
          data={!selectBeer ? data.pizzadata : data.beerdata}
          handleSelectOtherMenu={handleSelectOtherMenu}
          selectBeer={selectBeer}
          setTotalOrderdForCart={setTotalOrderdForCart}
          totalOrdersForCart={totalOrdersForCart}
        />
      )}
      {selectBeer && (
        <DigitalMenu
          data={!selectBeer ? data.pizzadata : data.beerdata}
          handleSelectOtherMenu={handleSelectOtherMenu}
          selectBeer={selectBeer}
          setTotalOrderdForCart={setTotalOrderdForCart}
          totalOrdersForCart={totalOrdersForCart}
        />
      )}
    </>
  );
}

export default App;

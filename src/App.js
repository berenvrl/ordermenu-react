import React, { useState } from "react";
import DigitalMenu from "./components/DigitalMenu";
import { data } from "./data";

function App() {
  const [selectBeer, setSelectBeer] = useState(false);

  function handleSelectOtherMenu() {
    setSelectBeer((select) => !select);
  }

  return (
    <>
      {!selectBeer && (
        <DigitalMenu
          data={data.pizzadata}
          handleSelectOtherMenu={handleSelectOtherMenu}
          selectBeer={selectBeer}
        />
      )}
      {selectBeer && (
        <DigitalMenu
          data={data.beerdata}
          handleSelectOtherMenu={handleSelectOtherMenu}
          selectBeer={selectBeer}
        />
      )}
    </>
  );
}

export default App;

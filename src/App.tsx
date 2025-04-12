import NestedCheckbox from "./NestedCheckbox";

import "./App.css";
import { NESTED_CHECKBOX_DATA } from "./utils/constant";
import { useState } from "react";
import { ICheckboxObj } from "./interface/common";

function App() {
  const [checkboxObj, setCheckboxObj] = useState<ICheckboxObj>({});

  const setCheckbox = (val: ICheckboxObj) => {
    setCheckboxObj((pre) => ({ ...pre, ...val }));
  };

  return (
    <>
      <NestedCheckbox
        data={NESTED_CHECKBOX_DATA}
        checkboxObj={checkboxObj}
        setCheckboxObj={setCheckbox}
      />
    </>
  );
}

export default App;

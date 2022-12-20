import React from "react";

const Creditamount = ({ creditValues, setVals, credit, i }) => {
  return (
    <div>
      <div className="first">
        <input
          className="account"
          type="number"
          value={setVals == true ? creditValues[i].value : null}
          onChange={(e) => credit(e.target.value, i)}
        />
      </div>
    </div>
  );
};

export default Creditamount;

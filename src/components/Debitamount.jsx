import React from "react";

const Debitamount = ({ debitValues, setVals, debit, i }) => {
  return (
    <div>
      <div className="first">
        <input
          className="account"
          type="number"
          value={setVals == true ? debitValues[i].value : null}
          onChange={(e) => debit(e.target.value, i)}
        />
      </div>
    </div>
  );
};

export default Debitamount;

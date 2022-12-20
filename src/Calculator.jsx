import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Debitamount from "./components/Debitamount";
import Creditamount from "./components/Creditamount";
import Accounts from "./components/Accounts";
import { FaTrashAlt } from "react-icons/fa";
import "./Calculator.css";

const Calculator = () => {
  const [arr, setarr] = useState([1, 2, 3]);
  const [setVals, setSetVals] = useState(false);
  const [debitValues, setdebitValues] = useState([
    { i: 0, value: 0 },
    { i: 1, value: 0 },
    { i: 2, value: 0 },
  ]);
  const [creditValues, setcreditValues] = useState([
    { i: 0, value: 0 },
    { i: 1, value: 0 },
    { i: 2, value: 0 },
  ]);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < debitValues.length; i++) {
      total = total + Number(debitValues[i].value);
    }

    setTotal(total);
  }, [debitValues]);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < creditValues.length; i++) {
      total = total + Number(creditValues[i].value);
    }

    setTotal2(total);
  }, [creditValues]);

  const [total, setTotal] = useState(0);
  const [total2, setTotal2] = useState(0);

  function myfunction() {
    setdebitValues([...debitValues, { i: arr.length, value: 0 }]);
    setcreditValues([...creditValues, { i: arr.length, value: 0 }]);
    setarr([...arr, 0]);
  }
  function remove(i) {
    let temp = [...arr];
    temp.splice(i, 1);
    setarr(temp);
    let tempTotal = [...debitValues];
    tempTotal.splice(i, 1);
    for (let j = i; j < tempTotal.length; j++) {
      tempTotal[j].i = tempTotal[j].i - 1;
    }
    setdebitValues(tempTotal);

    let tempTotal2 = [...creditValues];
    tempTotal2.splice(i, 1);
    for (let j = i; j < tempTotal2.length; j++) {
      tempTotal2[j].i = tempTotal2[j].i - 1;
    }
    setcreditValues(tempTotal2);

    setSetVals(true);
  }

  const adddebit = (val, i) => {
    let temp = [...debitValues];
    temp[i].value = val;
    setdebitValues(temp);
  };
  const addcredit = (val, i) => {
    let temp = [...creditValues];
    temp[i].value = val;
    setcreditValues(temp);
  };

  return (
    <div className="page">
      <div style={{ display: "flex" }}>
        <h4 className="acc">Accounts</h4>
        <h4 className="acc">Credit Amount</h4>
        <h4 className="acc">Debit Amount</h4>
      </div>

      {arr.map((item, i) => {
        return (
          <div style={{ display: "flex" }}>
            <Accounts />
            <Creditamount
              creditValues={creditValues}
              setVals={setVals}
              i={i}
              credit={addcredit}
            />
            <Debitamount
              debitValues={debitValues}
              setVals={setVals}
              i={i}
              debit={adddebit}
            />
            <FaTrashAlt className="pointer" onClick={() => remove(i)} />
          </div>
        );
      })}
      <div className="flex">
        <button type="button" onClick={myfunction}>
          Add+
        </button>
        <p>₹{total2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p>₹{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
    </div>
  );
};

export default Calculator;

import { useState } from "react";
import styled from "styled-components";

function Output({
  tipPerson,
  totalPerson,
  bill,
  percent,
  people,
  setbill,
  setpeople,
  setpercent,
  settipPerson,
  settotalPerson,
}) {
  const resetAll = () => {
    settipPerson("0.00");
    settotalPerson("0.00");
    setbill("");
    setpeople("");
    setpercent("");
  };
  return (
    <OutputContainer>
      <div className="per">
        <h2>
          Tip Amount <span>/ person</span>
        </h2>
        <h3>${tipPerson}</h3>
      </div>
      <div className="total">
        <h2>
          Total <span>/ person</span>
        </h2>
        <h3>${totalPerson}</h3>
      </div>
      <button onClick={resetAll}>RESET</button>
    </OutputContainer>
  );
}

export default Output;

const OutputContainer = styled.div`
  width: 100%;
  max-width: 327px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: #00474b;
  border-radius: 15px;
  padding: 39px 24px 24px;
  margin-bottom: 32px;

  span {
    display: block;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    color: #7f9d9f;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }

  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
    text-align: right;
    letter-spacing: -0.6px;
    color: #26c2ae;
  }

  .per,
  .total {
    display: flex;
    justify-content: space-between;
  }

  button {
    background: #26c2ae;
    border-radius: 5px;
    width: 281px;
    height: 48px;
    border: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #00474b;
  }
`;

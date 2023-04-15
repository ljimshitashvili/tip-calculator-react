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
  buttonColor,
  setbuttonColor,
}) {
  const resetAll = () => {
    settipPerson("0.00");
    settotalPerson("0.00");
    setbill("");
    setpeople("");
    setpercent("");
    setbuttonColor("#0D686D");
  };
  console.log({ buttonColor });
  return (
    <OutputContainer>
      <div className="per">
        <h2>
          Tip Amount <span>/ person</span>
        </h2>
        <h3>
          $
          {isNaN(tipPerson) || !isFinite(tipPerson)
            ? "0.00"
            : Number(tipPerson).toFixed(2)}
        </h3>
      </div>
      <div className="total">
        <h2>
          Total <span>/ person</span>
        </h2>
        <h3>
          $
          {isNaN(totalPerson) || !isFinite(totalPerson)
            ? "0.00"
            : Number(totalPerson).toFixed(2)}
        </h3>
      </div>
      <ResetButton buttonColor={buttonColor} onClick={resetAll}>
        RESET
      </ResetButton>
    </OutputContainer>
  );
}

export default Output;

const ResetButton = styled.button`
  background: ${(props) => props.buttonColor};
  border-radius: 5px;
  width: 281px;
  height: 48px;
  border: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #00474b;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 100%;

    :hover {
      background: #9fe8df;
    }
  }
`;

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

  @media (min-width: 1024px) {
    max-width: 410px;
    height: 360px;
    justify-content: space-around;
  } ;
`;

import { useState } from "react";
import styled from "styled-components";
import dollarSign from "/public/icon-dollar.svg";
import personSign from "/public/icon-person.svg";

function Input() {
  return (
    <InputContainer>
      <div className="bill">
        <h1>Bill</h1>
        <input type="number" id="bill" placeholder="0" />
        <img src={dollarSign} alt="currency icon" />
      </div>
      <div className="tip">
        <h1>Select Tip %</h1>
        <div className="buttonContainer">
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <input type="number" id="custom" placeholder="Custom" />
        </div>
      </div>
      <div className="people">
        <h1>Number of People</h1>
        <input type="number" id="people" placeholder="0" />
        <img src={personSign} alt="person icon" />
      </div>
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #5e7a7d;
  }

  .bill,
  .people {
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: relative;

    input {
      background: #f3f9fa;
      border-radius: 5px;
      border: 0;
      width: 311px;
      height: 48px;
      padding: 17px;
      text-align: right;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      text-align: right;
      color: #00474b;

      ::placeholder {
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        text-align: right;
        color: #9ebbbd;
      }
    }

    img {
      position: absolute;
      top: 44px;
      left: 19px;
    }
  }

  .tip {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    .buttonContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 16.5px;

      button {
        background: #00474b;
        border-radius: 5px;
        width: 146px;
        height: 48px;
        border: none;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #ffffff;
      }

      #custom {
        width: 146px;
        height: 48px;
        border-radius: 5px;
        border: none;
        background: #f3f9fa;
        padding: 17px;
        text-align: right;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #00474b;

        ::placeholder {
          font-weight: 700;
          font-size: 24px;
          line-height: 36px;
          text-align: right;
          color: #547878;
        }
      }
    }
  }
`;

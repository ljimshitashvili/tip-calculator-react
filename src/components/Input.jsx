import { useState, useEffect } from "react";
import styled from "styled-components";
import dollarSign from "/public/icon-dollar.svg";
import personSign from "/public/icon-person.svg";

function Input({
  bill,
  percent,
  people,
  setbill,
  setpeople,
  setpercent,
  settipPerson,
  settotalPerson,
  setbuttonColor,
}) {
  useEffect(() => {
    if (people !== 0 && people !== "") {
      const calculatePercent = (bill * percent) / 100;
      settipPerson(calculatePercent / people);
      settotalPerson((calculatePercent + Number(bill)) / people);
    }
  }, [bill, people, percent]);

  return (
    <InputContainer>
      <div className="bill">
        <h1>Bill</h1>
        <input
          type="number"
          id="bill"
          placeholder="0"
          value={bill}
          onChange={(e) => {
            setbill(e.target.value);
            setbuttonColor("#26C2AE");
          }}
        />
        <img src={dollarSign} alt="currency icon" />
      </div>
      <div className="tip">
        <h1>Select Tip %</h1>
        <div className="buttonContainer">
          <button
            onClick={() => {
              setpercent("5");
              setbuttonColor("#26C2AE");
            }}
          >
            5%
          </button>
          <button
            onClick={() => {
              setbuttonColor("#26C2AE");
              setpercent("10");
            }}
          >
            10%
          </button>
          <button
            onClick={() => {
              setbuttonColor("#26C2AE");
              setpercent("15");
            }}
          >
            15%
          </button>
          <button
            onClick={() => {
              setbuttonColor("#26C2AE");
              setpercent("25");
            }}
          >
            25%
          </button>
          <button
            onClick={() => {
              setbuttonColor("#26C2AE");
              setpercent("50");
            }}
          >
            50%
          </button>
          <input
            onChange={(e) => {
              setbuttonColor("#26C2AE");
              setpercent(e.target.value);
            }}
            type="number"
            id="custom"
            placeholder="Custom"
          />
        </div>
      </div>
      <div className="people">
        <h1>
          Number of People{" "}
          <ErrorMessage people={people}>Can't be zero</ErrorMessage>
        </h1>
        <StyledInput
          type="number"
          id="people"
          placeholder="0"
          value={people}
          onInput={(e) => {
            setpeople(e.target.value);
            setbuttonColor("#26C2AE");
          }}
          people={people}
        />
        <img src={personSign} alt="person icon" />
      </div>
    </InputContainer>
  );
}

export default Input;

const ErrorMessage = styled.span`
  color: #e17457;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  display: ${(props) => (props.people === "0" ? "block" : "none")};
`;

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

  .people {
    h1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
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
      cursor: pointer;

      ::placeholder {
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        text-align: right;
        color: #9ebbbd;
      }

      @media (min-width: 1024px) {
        width: 100%;

        :hover {
          outline: 2px solid #26c2ae;
        }
      }
    }

    img {
      position: absolute;
      top: 44px;
      left: 19px;
    }
  }

  .tip {
    width: 102%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    .buttonContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 16.5px;
      @media (min-width: 1024px) {
        gap: 14px;
        width: 100%;
      }

      button {
        background-color: #00474b;
        border-radius: 5px;
        width: 146px;
        height: 48px;
        border: none;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #ffffff;
        cursor: pointer;

        @media (min-width: 1024px) {
          width: 117px;

          :hover {
            background: #9fe8df;
            color: #00474b;
          }
        }
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
        cursor: pointer;

        ::placeholder {
          font-weight: 700;
          font-size: 24px;
          line-height: 36px;
          text-align: right;
          color: #547878;
        }

        @media (min-width: 1024px) {
          width: 117px;
          padding: 0;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    width: 380px;
    padding: 0;
  }
`;
const StyledInput = styled.input`
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
  cursor: pointer;
  outline: ${(props) => (props.people === "0" ? "2px solid #e17457" : "none")};
`;

import { useState } from "react";
import styled from "styled-components";
import splitter from "/public/logo.svg";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [bill, setbill] = useState("");
  const [people, setpeople] = useState("");
  const [percent, setpercent] = useState("");
  const [tipPerson, settipPerson] = useState("0.00");
  const [totalPerson, settotalPerson] = useState("0.00");
  const [buttonColor, setbuttonColor] = useState("#0D686D");

  return (
    <Body>
      <Header>
        <img src={splitter} alt="logo" />
      </Header>
      <Main>
        <Input
          bill={bill}
          people={people}
          percent={percent}
          setbill={setbill}
          setpeople={setpeople}
          setpercent={setpercent}
          settipPerson={settipPerson}
          settotalPerson={settotalPerson}
          buttonColor={buttonColor}
          setbuttonColor={setbuttonColor}
        />
        <Output
          bill={bill}
          people={people}
          percent={percent}
          tipPerson={tipPerson}
          buttonColor={buttonColor}
          totalPerson={totalPerson}
          setbill={setbill}
          setpeople={setpeople}
          setpercent={setpercent}
          settipPerson={settipPerson}
          settotalPerson={settotalPerson}
          setbuttonColor={setbuttonColor}
        />
      </Main>
    </Body>
  );
}

export default App;

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #c5e4e7;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    height: 300px;
  }
`;

const Main = styled.main`
  width: 100%;
  border-radius: 25px 25px 0 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media (min-width: 1024px) {
    width: 920px;
    flex: unset;
    border-radius: 25px;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px;
  }
`;

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
  console.log({ people });
  console.log({ totalPerson });

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
        />
        <Output
          bill={bill}
          people={people}
          percent={percent}
          tipPerson={tipPerson}
          totalPerson={totalPerson}
          setbill={setbill}
          setpeople={setpeople}
          setpercent={setpercent}
          settipPerson={settipPerson}
          settotalPerson={settotalPerson}
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
`;

const Header = styled.header`
  width: 100%;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;
  border-radius: 25px 25px 0 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Slider } from "../..";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #E7E8F8;
    font-family: "Arial", sans-serif;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Card = styled.div`
  box-shadow: rgba(25, 80, 137, 0.08) 0px 4px 8px -1px,
    rgba(0, 128, 255, 0.06) 0px 8px 24px -2px;
  background: #fff;
  border-radius: 6px;
  width: 500px;
  margin: 0 auto;
  height: 30%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  color: #5a2cc9;
  font-size: 18px;
  margin-bottom: 50px;
  text-align: center;
`;

const Copyright = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 13px;
  font-weight: bold;
  color: #c7cbef;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: #c7cbef;
    &:hover {
      color: #5a2cc9;
    }
  }
`;

export default () => {
  const [value, setValue] = useState(1);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Copyright>
          react-slider-measure /{" "}
          <a href="http://www.github.com/pixelize/react-slider-measure">
            GITHUB
          </a>
        </Copyright>
        <Card>
          <Title>
            Your weight is:{" "}
            <span style={{ fontWeight: "bold" }}>{value}kg</span>
          </Title>
          <Slider activeColor="#5a2cc9" steps={100} value={value} onChange={setValue} />
        </Card>
      </Container>
    </>
  );
};

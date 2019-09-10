import React from "react";
import styled from "styled-components"
import { colors } from "./lib/constants";

const tickStyles = `
  background-color: ${colors.tick};
  border-radius: 99px;
  bottom: 0;
  content: "";
  height: 15px;
  position: absolute;
  width: 2px;
  z-index: 1;
`;

const Tick = styled.div`
  background-color: ${colors.tick};
  border-radius: 99px;
  bottom: -40px;
  height: 30px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 2px;

  &::after {
    ${tickStyles}
    right: -10px;
  }

  &::before {
    ${tickStyles}
    right: -20px;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const Item = styled.div`
  color: ${colors.grey};
  font-size: 18px;
  margin: 0 5px;
  position: relative;
  text-align: center;
  user-select: none;
  width: 20px;
  line-height: 1;
  margin-top: 5px;

  &:last-child {
    ${Tick} {
      &::before,
      &::after {
        display: none;
      }
    }
  }
`;

interface IMeasureProps { steps: number; value: number; onClick: (index: number) => void; activeColor?: string; }

export const Measure = React.forwardRef<HTMLDivElement, IMeasureProps>(
  ({ steps, value, onClick, activeColor }: IMeasureProps, ref) => {
    return (
      <Container ref={ref}>
        {Array(steps)
          .fill(0)
          .map((number, i) => (
            <Item key={i}>
              <div
                onClick={() => onClick(i + 1)}
                style={{
                  cursor: "pointer",
                  transition: "all .2s",
                  color: value === i + 1 ? activeColor || colors.active : colors.grey,
                  transform:
                    value === i + 1
                      ? "scale(1.3) translateY(-3px)"
                      : "scale(1)",
                }}
              >
                {i + 1}
              </div>
              <Tick />
            </Item>
          ))}
      </Container>
    );
  },
);

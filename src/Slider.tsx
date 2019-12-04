import useComponentSize from "@rehooks/component-size";
import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";
import styled from "styled-components";
import { Measure } from "./Measure";
import { colors } from "./lib/constants";

const SliderContainer = styled.div`
  display: flex;
  height: 63px;
  overflow: hidden;
  position: relative;

  &::after {
    background: transparent;
    bottom: 0;
    content: "";
    cursor: ew-resize;
    height: 30px;
    left: 0;
    position: absolute;
    right: 0;
    z-index: 100;
  }
`;

const Bar = styled.div<{ activeColor: string }>`
  background: ${p => (p.activeColor ? p.activeColor : colors.active)};
  border-radius: 99px;
  bottom: 0;
  height: 30px;
  left: 50%;
  position: absolute;
  width: 2px;
  z-index: 99;
`;

const interpolateTransform: any = (x: number, y: number) =>
  `translate3D(${x}px, ${y}px, 0)`;

export const Slider = ({
  steps,
  value = 1,
  onChange,
  activeColor,
}: {
  steps?: number;
  value?: number;
  onChange: (newValue: number) => void;
  activeColor?: string;
}) => {
  const ref = useRef<HTMLDivElement>();
  const width = useComponentSize(ref).width;
  const stepWidth = width / steps;
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
  }));
  const bind = useDrag(({ down, movement, memo = xy.getValue() }) => {
    let x = movement[0] + memo[0];

    if (!down) {
      x = Math.min(0, Math.max(-1 * width, x));
      const newValue = Math.max(Math.round(x / stepWidth), (steps - 1) * -1);
      x = newValue * stepWidth;
      onChange(newValue * -1 + 1);
    }

    set({ xy: [x, 0] });

    return memo;
  });

  useEffect(() => {
    if (width) {
      set({ xy: [(value - 1) * stepWidth * -1, 0] });
    }
  }, [width, value, set, stepWidth]);

  return (
    <SliderContainer {...bind()}>
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          zIndex: 99,
          bottom: 0,
          marginLeft: -14,
          transform: xy.interpolate(interpolateTransform),
          marginTop: "auto",
        }}
      >
        <Measure
          activeColor={activeColor}
          value={value}
          steps={steps}
          onClick={onChange}
          ref={ref}
        />
      </animated.div>
      <Bar activeColor={activeColor} />
    </SliderContainer>
  );
};

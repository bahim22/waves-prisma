import * as React from "react";
import {
  LoaderContainer,
  BallOne,
  BallTwo,
  BallThree,
  BallFour,
  BallShadowOne,
  BallShadowTwo,
  BallShadowThree,
  BallShadowFour
} from "./Atoms";

interface LoaderProps {
  isInherit?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isInherit }) => (
  <LoaderContainer isInherit={isInherit}>
    <BallOne />
    <BallTwo />
    <BallThree />
    <BallFour />
    <BallShadowOne />
    <BallShadowTwo />
    <BallShadowThree />
    <BallShadowFour />
  </LoaderContainer>
);

export default Loader;

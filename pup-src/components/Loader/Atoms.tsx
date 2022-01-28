import styled, { keyframes } from "styled-components";

interface LoaderContainerProps {
  isInherit?: boolean;
}

export const LoaderContainer = styled.div<LoaderContainerProps>`
  position: ${props => (props.isInherit ? "inherit" : "absolute")};
  height: ${props => (props.isInherit ? 75 : 50)}px;
  width: 135px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  padding-top: ${props => (props.isInherit ? 35 : 0)}px;
`;

const jump = keyframes`
  0% {
    transform: scaleY(0.8);
  }
  100% {
    transform: translateY(-40px);
  }
`;

export const Ball = styled.div`
  width: 20px;
  position: relative;
  display: inline-block;
  margin: 5px;
  height: 20px;
  border-radius: 50%;
  z-index: 999;
`;

export const BallOne = styled(Ball)`
  background-color: #ffce64;
  animation: ${jump} 0.5s ease 0s infinite alternate;
`;

export const BallTwo = styled(Ball)`
  background-color: #4bb3ef;
  animation: ${jump} 0.5s ease 0.15s infinite alternate;
`;

export const BallThree = styled(Ball)`
  background-color: #63dd79;
  animation: ${jump} 0.5s ease 0.25s infinite alternate;
`;

export const BallFour = styled(Ball)`
  background-color: #fd6c6c;
  animation: ${jump} 0.5s ease 0.35s infinite alternate;
`;

const shrink = keyframes`
  100% {
    transform: scaleX(0.5);
    opacity: 0.01;
  }
`;

export const BallShadow = styled.div`
  position: relative;
  opacity: 0.1;
  bottom: 20px;
  width: 20px;
  height: 5px;
  border-radius: 50%;
  background-color: #262626;
  display: inline-block;
  margin: 5px;
`;

export const BallShadowOne = styled(BallShadow)`
  animation: ${shrink} 0.5s ease 0s infinite alternate;
`;

export const BallShadowTwo = styled(BallShadow)`
  animation: ${shrink} 0.5s ease 0.15s infinite alternate;
`;

export const BallShadowThree = styled(BallShadow)`
  animation: ${shrink} 0.5s ease 0.25s infinite alternate;
`;

export const BallShadowFour = styled(BallShadow)`
  animation: ${shrink} 0.5s ease 0.35s infinite alternate;
`;

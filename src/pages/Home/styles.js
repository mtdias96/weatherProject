import styled, { keyframes } from 'styled-components';
import background from '../../assets/images/background/background.png';

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${background}), lightgray 50% / cover no-repeat;
  background-repeat: no-repeat;
  background-size:cover;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1330px;
  height: 859px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerContent = styled.div`
  margin-top: 164px;
  margin-bottom: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
  color: ${({ theme }) => theme.colors.gray[100]};
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  text-align: center;

  span{
    color: ${({ theme }) => theme.colors.blueWhite};
  }
  }

  p{
  color: ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  }

`;

const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  input {
    padding-right: 42px;
  }

  img {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -16px;
    animation: ${spinAnimation} 2s linear infinite;
  }
`;

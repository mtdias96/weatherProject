import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  display: flex;
  height: 56px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  outline: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray[600]};
  color: ${({ theme }) => theme.colors.gray[100]};

  &::placeholder{
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  }

  ${({ theme, citys }) => citys && css`
  border-radius: 0px;
  background: ${theme.colors.gray[500]};
  border-bottom: 1px solid black;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.60);

  `}
`;

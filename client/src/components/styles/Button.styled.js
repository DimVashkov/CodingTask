import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  padding: 10px 20px;
  margin: 16px 0;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;
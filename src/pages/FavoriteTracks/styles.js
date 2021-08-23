import styled from "styled-components";

export const Logo = styled.img`
  width: 125px;
  height: 24px;
  cursor: pointer;
`;
export const Header = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button``;

export const ButtonHomePage = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  border: 1px solid #524f4f;
  border-radius: 18px;
  padding: 0 20px;
  height: 36px;
  font-size: 14px;
  transition: background-color 0.15s ease;
  cursor: pointer;

  > svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

export const Container = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 125px 1fr 125px;
  gap: 20px;
  margin-bottom: 40px;
  align-items: center;
  min-height: 54px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  display: block;
  width: 125px;
  height: 24px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

export const Search = styled.input`
  padding: 14px 20px 14px 51px;
  border-radius: 35px;
  border: solid 1px rgb(234, 234, 234);
  color: rgb(114, 114, 125);
  outline: none;
  width: 100%;
  transition: box-shadow 300ms ease;

  &:hover,
  &:focus {
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  }
`;

export const IconSearch = styled(BsSearch)`
  left: 20px;
  position: absolute;
  pointer-events: none;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
`;

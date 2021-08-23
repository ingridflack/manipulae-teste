import styled from "styled-components";

import { BsMusicNoteList } from "react-icons/bs";

export const Container = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TitleContainer = styled.div`
  margin: 0px 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
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

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Title = styled.h2`
  color: #191919;
  font-size: 22px;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const IconMusicList = styled(BsMusicNoteList)`
  margin-right: 10px;
`;

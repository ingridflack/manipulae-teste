import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
export const Track = styled.div``;

export const Button = styled.button`
  border-radius: 50%;
  background-color: #fff;
  border: none;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const OpacityContainer = styled.div`
  opacity: 0;
  transition: opacity 0.15s;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
`;

export const ImageContainer = styled.div`
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::after {
    background-color: #fff;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.15s;
  }

  &:hover {
    &::after {
      opacity: 0.24;
    }

    ${OpacityContainer} {
      opacity: 1;
    }
  }
`;

export const Album = styled.img`
  display: block;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: 100%;
`;

export const Play = styled(BsFillPlayFill)`
  font-size: 20px;
`;
export const Pause = styled(BsFillPauseFill)`
  font-size: 20px;
`;
export const Like = styled(BsHeart)`
  font-size: 16px;
`;
export const Dislike = styled(BsHeartFill)`
  font-size: 16px;
`;

export const TextContainer = styled.div`
  padding: 8px 0 0 0;
`;
export const TrackTitle = styled.p`
  color: #191919;
  font-size: 14px;
  margin-bottom: 3px;
`;
export const ArtistName = styled.p`
  color: #52525d;
  font-size: 12px;
  margin-bottom: 2px;

  > span {
    margin-right: 3px;
  }
`;
export const TrackDuration = styled.p`
  color: #72727d;
  font-size: 10px;
  margin-bottom: 2px;
`;

export const Link = styled.a`
  background-color: #fff;
  text-decoration: none;
  color: #000;
  border-radius: 18px;
  font-size: 12px;
  padding: 10px;
  transition: background-color 0.15s ease, transform 0.15s ease;

  &:hover {
    background-color: #f2f2f2;
    transform: scale(1.05);
  }
`;

export const TrackContainer = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 24px 34px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
  }
`;

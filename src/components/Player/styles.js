import styled, { createGlobalStyle } from "styled-components";

export const AudioContainer = styled.div`
  border-top: 1px solid #eaeaea;
  padding: 20px 40px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background-color: #fff;
`;

export const TrackContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`;
export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  > svg {
    font-size: 25px;
  }
`;
export const Track = styled.div`
  width: 100%;
`;
export const TrackInfo = styled.p`
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #191919;
`;
export const TrackSlider = styled.input`
  width: 100%;

  &[type="range"] {
    height: 17px;
    -webkit-appearance: none;
    width: 100%;
  }
  &[type="range"]:focus {
    outline: none;
  }
  &[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #989aa6;
    border-radius: 0px;
    border: 0px solid #000000;
  }
  &[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #7d7d7d;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.5px;
  }
  &[type="range"]:focus::-webkit-slider-runnable-track {
    background: #989aa6;
  }
  &[type="range"]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #989aa6;
    border-radius: 0px;
    border: 0px solid #000000;
  }
  &[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #7d7d7d;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #ffffff;
    cursor: pointer;
  }
  &[type="range"]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &[type="range"]::-ms-fill-lower {
    background: #989aa6;
    border: 0px solid #000000;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }
  &[type="range"]::-ms-fill-upper {
    background: #989aa6;
    border: 0px solid #000000;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }
  &[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #7d7d7d;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #ffffff;
    cursor: pointer;
  }
  &[type="range"]:focus::-ms-fill-lower {
    background: #989aa6;
  }
  &[type="range"]:focus::-ms-fill-upper {
    background: #989aa6;
  }
`;

export const SliderContainer = styled.div`
  align-items: center;
  display: flex;
  color: #92929d;
  font-size: 10px;
`;
export const TrackProgress = styled.span`
  margin-right: 10px;
  flex-shrink: 0;
`;
export const TrackDuration = styled.span`
  margin-left: 10px;
  flex-shrink: 0;
`;

export const PlayerGlobalStyle = createGlobalStyle`
  body {
    padding-bottom: 104px;
  }
`;

export const CloseButton = styled.button`
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  background-color: transparent;
  border: none;
`;

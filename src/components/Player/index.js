import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  AudioContainer,
  Controls,
  Track,
  TrackInfo,
  TrackSlider,
  Button,
  TrackContainer,
  SliderContainer,
  TrackDuration,
  TrackProgress,
  PlayerGlobalStyle,
  CloseButton,
} from "./styles";

import ReactPlayer from "react-player/lazy";
import { formatDuration } from "../../utils/format";
import { Pause, Play } from "../TrackList/styles";
import { BsX } from "react-icons/bs";

function Player() {
  const playerRef = useRef();
  const { isPlaying, currentTrack } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const [progress, setProgress] = useState();
  const [duration, setDuration] = useState();

  const handlePlayButton = () => {
    dispatch({
      type: "SET_IS_PLAYING",
      isPlaying: !isPlaying,
    });
  };

  const handleCloseButton = () => {
    dispatch({
      type: "SET_IS_PLAYING",
      isPlaying: false,
    });
    dispatch({
      type: "SET_CURRENT_TRACK",
      currentTrack: undefined,
    });
  };

  const handleTrackProgress = ({ playedSeconds }) => {
    setProgress(playedSeconds);
  };

  const handleTrackDuration = (duration) => {
    setDuration(duration);
  };

  const handleTrackSeekChange = ({ target }) => {
    playerRef.current?.seekTo(parseFloat(target.value));
  };

  return (
    !!currentTrack && (
      <>
        <PlayerGlobalStyle />
        <AudioContainer>
          <TrackContainer>
            <Controls>
              <Button onClick={handlePlayButton}>
                {isPlaying ? <Pause /> : <Play />}
              </Button>
            </Controls>
            <Track>
              <TrackInfo>
                {currentTrack.title} · {currentTrack.artist.name}
              </TrackInfo>
              <SliderContainer>
                <TrackProgress>{formatDuration(progress)}</TrackProgress>
                <TrackSlider
                  type="range"
                  min="0"
                  max={duration}
                  step="1"
                  value={progress}
                  onChange={handleTrackSeekChange}
                />
                <TrackDuration>{formatDuration(duration)}</TrackDuration>
              </SliderContainer>
            </Track>
            <CloseButton onClick={handleCloseButton}>
              <BsX />
            </CloseButton>
          </TrackContainer>
          <ReactPlayer
            ref={playerRef}
            url={currentTrack.preview}
            width="100%"
            height="auto"
            playing={isPlaying}
            onProgress={handleTrackProgress}
            onDuration={handleTrackDuration}
          />
        </AudioContainer>
      </>
    )
  );
}

export default Player;

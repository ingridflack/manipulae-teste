import React, { useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getTopTracks } from "../../services/tracks";
import { formatDuration } from "../../utils/format";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Track,
  ImageContainer,
  TextContainer,
  Album,
  TrackTitle,
  ArtistName,
  TrackDuration,
  Button,
  ButtonContainer,
  Link,
  Play,
  Pause,
  OpacityContainer,
  TrackContainer,
} from "./styles";

function TrackList({ tracks, fetchData, hasMore }) {
  const { isPlaying, currentTrack } = useSelector((state) => state.player);
  const { favoriteTracks } = useSelector((state) => state.tracks);

  const dispatch = useDispatch();

  const removeFavoriteTrack = (track) => {
    dispatch({
      type: "REMOVE_FAVORITE_TRACK",
      track: track,
    });
    toast.success("Música removida com sucesso");
  };

  const addFavoriteTrack = (track) => {
    dispatch({
      type: "ADD_FAVORITE_TRACK",
      track: track,
    });
    toast.success("Música adicionada às favoritas!");
  };

  const handleToggleFavoriteTrack = (track, isLiked) => {
    if (isLiked) {
      removeFavoriteTrack(track);
    } else {
      addFavoriteTrack(track);
    }
  };

  const handlePlayerButton = (track) => {
    dispatch({
      type: "SET_IS_PLAYING",
      isPlaying: currentTrack?.id === track.id ? !isPlaying : true,
    });

    dispatch({
      type: "SET_CURRENT_TRACK",
      currentTrack: track,
    });
  };

  return (
    <TrackContainer
      next={fetchData}
      loader={<h4>Carregando...</h4>}
      hasMore={!!hasMore}
      dataLength={tracks.length}
      endMessage={null}
    >
      {tracks.map((track) => {
        const isLiked = favoriteTracks.some((item) => {
          return track.id === item.id;
        });

        return (
          <Track key={track.id}>
            <ImageContainer>
              <Album src={track.album.cover_medium}></Album>
              <ButtonContainer>
                <Button onClick={() => handlePlayerButton(track)}>
                  {isPlaying && currentTrack?.id === track.id ? (
                    <Pause />
                  ) : (
                    <Play />
                  )}
                </Button>
                <OpacityContainer>
                  <Button
                    onClick={() => handleToggleFavoriteTrack(track, isLiked)}
                  >
                    {isLiked ? <BsHeartFill /> : <BsHeart />}
                  </Button>
                  <Link href={track.link}>Música completa</Link>
                </OpacityContainer>
              </ButtonContainer>
            </ImageContainer>
            <TextContainer>
              <TrackTitle>{track.title}</TrackTitle>
              <ArtistName>
                <span>por</span>
                {track.artist.name}
              </ArtistName>
              <TrackDuration>{formatDuration(track.duration)}</TrackDuration>
            </TextContainer>
          </Track>
        );
      })}
    </TrackContainer>
  );
}

export default TrackList;

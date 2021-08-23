import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Player from "../../components/Player";
import TrackList from "../../components/TrackList";
import Header from "../../components/Header";

import {
  Container,
  TitleContainer,
  Title,
  Button,
  IconMusicList,
} from "./styles";
import { Link } from "react-router-dom";
import { searchTracks } from "../../services/searchResult";
import { getTopTracks } from "../../services/tracks";

function Homepage() {
  const { topTracks, search } = useSelector((state) => state.tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await getTopTracks();
        dispatch({
          type: "FETCH_TOP_TRACKS_SUCCESS",
          tracks: response.data.data,
        });
      } catch (e) {}
    };

    fetchTopTracks();
  }, [dispatch]);

  const isSearching = search.input.length;
  const tracks = isSearching ? search.results : topTracks;

  return (
    <Container>
      <Header />

      <TitleContainer>
        <Title>Top tracks</Title>
        <Button as={Link} to="/tracks/favorite">
          <IconMusicList />
          Minhas músicas
        </Button>
      </TitleContainer>

      <TrackList
        tracks={tracks}
        hasMore={isSearching && search.pagination.hasMore}
        fetchData={isSearching && searchTracks}
      />
      <Player />
    </Container>
  );
}

export default Homepage;

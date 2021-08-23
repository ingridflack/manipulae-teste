import React from "react";
import { useSelector } from "react-redux";
import Player from "../../components/Player";
import TrackList from "../../components/TrackList";
import DeezerLogo from "../../assets/img/deezer.svg";

import { Container, TitleContainer, Title } from "../Homepage/styles";

import { ButtonHomePage } from "./styles";
import { Link } from "react-router-dom";

import { BsFillHouseFill } from "react-icons/bs";
import Header from "../../components/Header";
function FavoriteTracks() {
  const { favoriteTracks } = useSelector((state) => state.tracks);

  return (
    <Container>
      <Header search={false} />
      <TitleContainer>
        <Title>Minhas músicas</Title>
        <ButtonHomePage as={Link} to="/">
          <BsFillHouseFill />
          Página inicial
        </ButtonHomePage>
      </TitleContainer>
      <>
        <TrackList tracks={favoriteTracks} />
      </>
      <Player />
    </Container>
  );
}

export default FavoriteTracks;

import React, { useCallback, useEffect, useMemo } from "react";
import debounce from "lodash/debounce";

import {
  Container,
  Logo,
  SearchContainer,
  Search,
  IconSearch,
  LogoContainer,
} from "./styles";
import DeezerLogo from "../../assets/img/deezer.svg";
import { useDispatch, useSelector } from "react-redux";
import { searchTracks } from "../../services/searchResult";

function Header({ search }) {
  const { input } = useSelector((state) => state.tracks.search);
  const dispatch = useDispatch();

  const getSearchResult = useCallback((input) => {
    if (!input.length) return;

    searchTracks();
  }, []);

  const debouncedSearch = useMemo(
    () => debounce(getSearchResult, 500),
    [getSearchResult]
  );

  useEffect(() => {
    debouncedSearch(input);
  }, [debouncedSearch, input]);

  const handleInputChange = (event) => {
    dispatch({
      type: "SEARCH_INPUT_CHANGE",
      input: event.target.value,
    });
  };

  return (
    <Container>
      <LogoContainer to="/">
        <Logo src={DeezerLogo} />
      </LogoContainer>

      {!!search && (
        <SearchContainer>
          <IconSearch />
          <Search
            placeholder="Buscar"
            value={input}
            onChange={handleInputChange}
          />
        </SearchContainer>
      )}
    </Container>
  );
}

Header.defaultProps = {
  search: true,
};

export default Header;

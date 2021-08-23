import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import Homepage from "./pages/Homepage";
import FavoriteTracks from "./pages/FavoriteTracks";
import { ToastContainer } from "react-toastify";

const GlobalStyle = createGlobalStyle`
 * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
 }
  `;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ToastContainer />

      <div>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/tracks/favorite" component={FavoriteTracks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

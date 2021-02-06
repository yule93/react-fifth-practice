import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins/CoinsPresenter";
import Exchanges from "../Screens/Exchanges/ExchangesPresenter";
import Prices from "../Screens/Prices/PricesPresenter";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" component={Coins} />
    </Router>
  );
};

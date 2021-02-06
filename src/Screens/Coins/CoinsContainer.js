import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { coinsApi } from "../../Components/api";

export default class extends React.Component {
  state = {
    name: null,
    symbol: null,
    price: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results }
      } = await coinsApi.coins();
      console.log(results);
      this.setState({
        coins: results
      });
    } catch (error) {
      this.setState({
        error: "Can't loading prices information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { name, symbol, price, error, loading } = this.state;
    return (
      <CoinsPresenter
        name={name}
        symbol={symbol}
        price={price}
        error={error}
        loading={loading}
      />
    );
  }
}

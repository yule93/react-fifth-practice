import React from "react";
import { coinsApi } from "../../Components/api";
import PricePresenter from "./PricePresenter";

export default class extends React.Component {
  state = {
    prices: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: {result: prices}
      } = await coinsApi.prices();
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
    const { coins, error, loading } = this.state;
    return <PricePresenter coins={coins} error={error} loading={loading} />;
  }
}

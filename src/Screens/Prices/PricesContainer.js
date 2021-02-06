import React from "react";
import { homepageApi } from "../../Components/api";
import PricePresenter from "./PricePresenter";

export default class extends React.Component {
  state = {
    prices: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const prices = await homepageApi.prices();
      console.log(prices);
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

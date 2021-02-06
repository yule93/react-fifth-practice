import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { exchangesApi } from "../../Components/api";

export default class extends React.Component {
  state = {
    exchanges: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const exchanges = await exchangesApi.exchanges();
      console.log(exchanges);
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
    const { name, description, link, error, loading } = this.state;
    return (
      <ExchangesPresenter
        name={name}
        description={description}
        link={link}
        error={error}
        loading={loading}
      />
    );
  }
}

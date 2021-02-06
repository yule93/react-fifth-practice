import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/",
  params: {
    language: "en-US"
  }
});

export const coinsApi = {
  coins: () => api.get("coins")
};

export const homepageApi = {
  prices: () => api.get("tickers")
};

export const exchangesApi = {
  exchanges: () => api.get("exchanges")
};

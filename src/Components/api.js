import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});

export const coinsApi = {
  coins: () => api.get("coins"),
  prices: () => api.get("tickers"),
  exchanges: () => api.get("exchanges")
};

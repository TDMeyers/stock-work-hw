import { createContext, useState } from "react";
import stocks from "../Components/data";

export const StocksContext = createContext();

export function StocksContextProvider({ children }) {
  const [stocksData, setStocksData] = useState(stocks);
  const [follow, setFollow] = useState([]);

  const handleFollow = (stockInfo) => {
    setFollow([...follow, stockInfo]);
  };

  const handleUnfollow = (stockInfo) => {
    const toUnfollow = follow.filter(
      (item) => item.symbol !== stockInfo.symbol
    );
    stockInfo.following = false;
    setFollow(toUnfollow);
  };

  const valueToShare = {
    stocksData,
    follow,
    handleFollow,
    handleUnfollow,
  };

  return (
    <StocksContext.Provider value={valueToShare}>
      {children}
    </StocksContext.Provider>
  );
}

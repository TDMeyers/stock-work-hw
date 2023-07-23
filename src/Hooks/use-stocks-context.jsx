import { useContext } from "react";
import { StocksContext } from "../Context/stocksContext";

function useStocksContext() {
  return useContext(StocksContext);
}

export default useStocksContext;
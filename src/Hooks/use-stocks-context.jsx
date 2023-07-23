import { useContext } from "react";
import { StocksContext } from "../Context/StocksContext";

function useStocksContext() {
  return useContext(StocksContext);
}

export default useStocksContext;
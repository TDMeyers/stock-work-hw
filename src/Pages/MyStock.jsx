import StocksList from "../Components/StocksList";
import useStocksContext from "../Hooks/use-stocks-context";

export default function MyStock() {
  const { follow } = useStocksContext();

  return (
    <div className="container">
      <StocksList data={follow} />
    </div>
  );
}

import StocksList from "../components/StocksList";
import stocks from "../Components/data";

function Dashboard() {
  return (
    <div className="container">
      <StocksList data={stocks} />
    </div>
  );
}

export default Dashboard;

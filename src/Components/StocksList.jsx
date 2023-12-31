import StocksItem from "./StocksItem";
import "../Styles/StocksList.css";

function StocksList({ data }) {
  const renderList = data.map((stock) => (
    <StocksItem
      key={stock.symbol}
      stockInfo={stock}
    />
  ));

  return (
    <div>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Follow?</th>
          </tr>
        </thead>
        {renderList}
      </table>
    </div>
  );
}

export default StocksList;

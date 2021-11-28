import React from "react";
import CoinRow from "./CoinRow";

const TableCoins = ({ coins }) => {
  const titles = [
    "#",
    "Coin",
    "Current Price",
    "Price Change",
    "24h Volume",
    "Total Volume",
  ];

  return (
    <div>
      <table className="table table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((title) => (
              <td>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoins;

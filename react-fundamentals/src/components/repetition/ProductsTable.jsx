import React from "react";
import "./ProductsTable.css";
import products from "../../data/products";

export default (props) => {
  function getTableLines() {
    return products.map((product, i) => {
      return (
        <tr key={product.id} className={i % 2 === 0 ? "odd" : "even"}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>R$ {product.price.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="ProductsTable">
      <table border="1">
        <caption>Products List</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{getTableLines()}</tbody>
      </table>
    </div>
  );
};

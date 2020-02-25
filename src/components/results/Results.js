import React from "react";
import { PieChart, ColumnChart, BarChart } from "react-chartkick";
import "chart.js";
import { useSelector } from "react-redux";

const Results = () => {
  const products = useSelector(state => state.products);
  const template = useSelector(state => state.template);
  const dataRender = () => {
    let arrData = [];
    products.forEach(product => {
      const prodData = [product.name, product[template.property]];
      arrData = [...arrData, prodData];
    });
    return arrData;
  };
  return (
    <div className="results">
      {products.length ? (
        <div className="results__pie-chart">
          <h2>Showing results for: {template.name}</h2>
          <PieChart data={dataRender()} />
          <ColumnChart data={dataRender()} />
          <BarChart data={dataRender()} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Results;

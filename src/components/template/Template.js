import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Fade } from "reactstrap";
import TemplateDropdown from "./TemplateDropdown";
import Modal from "../Modal";
import Form from "./Form";

const Template = () => {
  const [productModal, showProductModal] = useState(false);
  const products = useSelector(state => state.products);

  return (
    <div className="template">
      <TemplateDropdown />
      {productModal ? (
        <Fade in={productModal}>
        <Modal title="New Product" toggle={showProductModal}>
          <Form />
        </Modal>
        </Fade>
      ) : (
        ""
      )}
      <div className="template__datatable">
        <h4>Products</h4>
        <ul className="list-group">
          {products.length
            ? products.map(product => (
                <li key={product.name} className="list-group-item">
                  <h2>{product.name}</h2>
                  <p>Sales Revenue: {product.saleRev}</p>
                  <p>Amount Sold: {product.quantity}</p>
                  <p>Ads Revenue: {product.adRev}</p>
                  <p>Views: {product.views}</p>
                </li>
              ))
            : 
            <h6>Add products to show results</h6>
            }
        </ul>
      </div>

      <Button
        onClick={() => showProductModal(true)}
        className="mb-3 mt-4 d-block"
        color="primary"
      >
        Add Product
      </Button>
    </div>
  );
};

export default Template;

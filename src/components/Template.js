import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import TemplateDropdown from "./TemplateDropdown";
import Modal from "./Modal";
import Form from "./Form";

const Template = () => {
  const [productModal, showProductModal] = useState(false);
  const products = useSelector(state => state.products);

  return (
    <div className="template">
      <TemplateDropdown />
      {productModal ? (
        <Modal title="New Product" toggle={showProductModal}>
          <Form />
        </Modal>
      ) : (
        ""
      )}
      <div className="template__datatable">
        <ul className="list-group">
          {products.length
            ? products.map(product => (
                <li key={product.name} className="list-group-item">
                  {product.name}
                </li>
              ))
            : ""}
        </ul>
      </div>

      <Button
        onClick={() => showProductModal(true)}
        className="mb-3"
        block={true}
        color="primary"
      >
        Add Data Button
      </Button>
      <Button color="success">Submit</Button>
    </div>
  );
};

export default Template;

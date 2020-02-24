import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TemplateInput from "./TemplateInput";
import { Button, Alert } from "reactstrap";
import { newProduct } from "../actions";

const Form = () => {
  const [name, setName] = useState("");
  const [saleRev, setSaleRev] = useState("");
  const [quantity, setQuantity] = useState("");
  const [adRev, setAdRev] = useState("");
  const [views, setViews] = useState("");
  const [message, setMessage] = useState("");
  const [alertClass, setAlertClass] = useState("")
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  const handleNewProduct = e => {
    e.preventDefault();
    const nameExists = products.find(product => product.name === name);
    if (nameExists) {
      const tempName = name;
      setMessage(`${tempName} already exists.`);
      setAlertClass("danger")
      return;
    }
    const tempName = name;
    setMessage(`${tempName} added.`);
    setAlertClass("success")
    const product = {
      name,
      saleRev,
      quantity,
      adRev,
      views
    };
    dispatch(newProduct(product));
    clearForm();
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  const clearForm = () => {
    setName("");
    setSaleRev("");
    setQuantity("");
    setAdRev("");
    setViews("");
  };
  return (
    <>
      {message ? (
        <Alert className="text-center" color={alertClass}>
          {message}
        </Alert>
      ) : (
        ""
      )}
      <form onSubmit={e => handleNewProduct(e)}>
        <TemplateInput name="Product Name" setValue={setName} value={name} />
        <TemplateInput
          type="number"
          name="Sale Revenue"
          leftLabel="$"
          setValue={setSaleRev}
          value={saleRev}
        />
        <TemplateInput
          type="number"
          name="Quantity Sold"
          setValue={setQuantity}
          quantity={quantity}
        />
        <TemplateInput
          type="number"
          name="Ad Revenue"
          leftLabel="$"
          setValue={setAdRev}
          value={adRev}
        />
        <TemplateInput
          type="number"
          name="Views"
          setValue={setViews}
          value={views}
        />
        <Button className="mt-2" block={true} color="success" type="submit">
          Add
        </Button>
      </form>
    </>
  );
};

export default Form;

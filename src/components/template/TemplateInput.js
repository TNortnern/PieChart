import React from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

const TemplateInput = ({ name, leftLabel, setValue, value, type }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <br />
      <InputGroup>
        {leftLabel ? (
          <InputGroupAddon addonType="prepend">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
        ) : (
          ""
        )}
        <Input type={type ? type : 'text'} onChange={(e) => setValue(e.target.value)} name={name} value={value} />
      </InputGroup>
    </>
  );
};

export default TemplateInput;

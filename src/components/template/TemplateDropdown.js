import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTemplate } from "../../actions";

const TemplateDropdown = () => {
  const templates = useSelector(state => state.templates);
  const dispatch = useDispatch();
  return (
    <div className="template__dropdown">
      <div className="input-group mb-3">
        <select
          onChange={e => {
            dispatch(selectTemplate(e.target.value));
          }}
          className="custom-select"
        >
          <option defaultValue>Choose Template...</option>
          {templates.map(template => (
            <option key={template} value={template}>{template}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TemplateDropdown;

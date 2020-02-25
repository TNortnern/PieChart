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
            const splitVal = e.target.value.split('-')
            const templateObj = {
              name: splitVal[0],
              property: splitVal[1]
            }
            dispatch(selectTemplate(templateObj));
          }}
          className="custom-select"
        >
          {templates.map(template => (
            <option key={template.property} value={`${template.name}-${template.property}`}>{template.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TemplateDropdown;

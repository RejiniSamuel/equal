import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check bg-purple o-80 br3 pa2 ma3 shadow-5">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="largerCheckbox mr3"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;

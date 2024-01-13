import React from "react";

const Form = ({ filters, formFields, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ name, filterName, type }) => (
        <React.Fragment key={name}>
          <label>
            {name}
            <input
              value={filters[filterName]}
              onChange={(e) => handleChange(e, filterName)}
              name={name}
              type={type}
            ></input>
          </label>
          <br />
        </React.Fragment>
      ))}
      <button type="submit">Szukaj</button>
    </form>
  );
};

export default Form;

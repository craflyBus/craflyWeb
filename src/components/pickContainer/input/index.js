import React, { useEffect, useState } from "react";
import {
  RemoveBox,
  AddBox,
  Field,
  ContentTextBox,
  TitleTextBox,
} from "./style";

export const DynamicFormComponent = () => {
  const [formFields, setFormFields] = useState([{ name: "", value: "" }]);

  const handleAddFields = () => {
    const values = [...formFields, { name: "", value: "" }];
    setFormFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...formFields];
    values.splice(index, 1);
    setFormFields(values);
  };

  const handleInputChange = (index, e) => {
    const values = [...formFields];

    if (e.target.name === "name") {
      values[index].name = e.target.value;
    } else {
      values[index].value = e.target.value;
    }
    setFormFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  useEffect(() => {
    console.log("formFields changed:", formFields);
  }, [formFields]);

  return (
    <form onSubmit={handleSubmit} style={{}}>
      {formFields.map((field, index) => (
        <Field key={index}>
          <TitleTextBox
            type="text"
            placeholder="Field name"
            name="name"
            value={field.name}
            onChange={(e) => handleInputChange(index, e)}
            style={{ marginRight: 10 }}
          />

          <ContentTextBox
            type="text"
            placeholder="Field value"
            name="value"
            value={field.value}
            onChange={(e) => handleInputChange(index, e)}
            style={{ marginRight: 10 }}
          />

          <RemoveBox type="button" onClick={() => handleRemoveFields(index)}>
            Remove
          </RemoveBox>
        </Field>
      ))}

      <AddBox type="button" onClick={() => handleAddFields()}>
        Add Field
      </AddBox>
    </form>
  );
};

export default DynamicFormComponent;

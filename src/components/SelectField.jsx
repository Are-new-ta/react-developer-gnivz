import React from "react";
import styled from "styled-components";

const SelectFieldWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const SelectFieldStyled = styled.select`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  box-sizing: border-box;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  position: absolute;
  left: 10px;
  bottom: calc(100% + 5px);
`;

const SelectField = ({ label, error, ...props }) => (
  <SelectFieldWrapper>
    <SelectFieldStyled {...props} />
    {error && <ErrorText>{error}</ErrorText>}
  </SelectFieldWrapper>
);

export default SelectField;

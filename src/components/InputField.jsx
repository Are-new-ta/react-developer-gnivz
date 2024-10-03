import React from "react";
import styled from "styled-components";

const InputFieldWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const InputFieldStyled = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  ${({ error }) =>
    error &&
    `
    border: 1px solid red;
    background-color: #ffebee;
  `}
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  position: absolute;
  left: 5px;
  top: calc(100% - 5px);
`;

const InputField = ({ label, error, ...props }) => (
  <InputFieldWrapper>
    <InputFieldStyled error={!!error} {...props} />
    {error && <ErrorText>{error}</ErrorText>}
  </InputFieldWrapper>
);

export default InputField;

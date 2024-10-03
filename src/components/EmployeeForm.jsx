import React, { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  gap: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const SaveButton = styled.button`
  width: 200px;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
`;

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    gender: "",
    birthDate: "",
    mobile: "",
    email: "",
    address: "",
    employer: "",
  });

  const { errors, handleSubmit } = useFormAndValidation(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FormContainer>
      <Title>Информация о сотруднике</Title>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <InputField
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </InputContainer>
        <InputContainer>
          <InputField
            type="text"
            name="firstName"
            placeholder="Имя"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
        </InputContainer>
        <InputContainer>
          <SelectField
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            error={errors.gender}
          >
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </SelectField>
          <InputField
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            error={errors.birthDate}
          />
        </InputContainer>

        <InputContainer>
          <InputField
            type="text"
            name="mobile"
            placeholder="Мобильный телефон"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </InputContainer>
        <InputContainer>
          <InputField
            type="text"
            name="address"
            placeholder="Адрес"
            value={formData.address}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <InputField
            type="text"
            name="employer"
            placeholder="Работодатель"
            value={formData.employer}
            onChange={handleChange}
          />
        </InputContainer>

        <SaveButton type="submit">Сохранить</SaveButton>
      </form>
    </FormContainer>
  );
};

export default EmployeeForm;

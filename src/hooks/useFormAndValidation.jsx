import { useState } from "react";
import {
  ERROR_BIRTH_DATE,
  ERROR_EMAIL,
  ERROR_FIRST_NAME,
  ERROR_LAST_NAME,
  ERROR_MOBILE,
} from "../utils/const";

export function useFormAndValidation(formData) {
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    if (!formData.lastName) newErrors.lastName = ERROR_LAST_NAME;
    if (!formData.firstName) newErrors.firstName = ERROR_FIRST_NAME;
    if (!formData.birthDate) newErrors.birthDate = ERROR_BIRTH_DATE;
    if (!formData.mobile) newErrors.mobile = ERROR_MOBILE;
    if (!formData.email) newErrors.email = ERROR_EMAIL;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Форма валидна, отправляется запрос");
    }
  };

  return { errors, handleSubmit, validateFields };
}

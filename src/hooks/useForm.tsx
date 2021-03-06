import React, { useCallback, useState } from 'react';
import validateEmail from '../helpers/validateEmail';
import validateNumber from '../helpers/validateNumber';
import validatePassword from '../helpers/validatePassword';
import validateText from '../helpers/validateText';

type Field = {
  type: string,
  value: string
};

type Error = {
  [key: string]: string
};

type FormProps = {
  [key:string]: Field
};

const useForm = (defaultValues: FormProps) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState<Error>({});

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const field = { type: values[name].type, value };
    setValues(state => ({ ...state, [name]: field }));
  }, []);

  const handleReset = useCallback(() => {
    setValues(defaultValues);
  }, []);

  const handleValidation = (data: FormProps): boolean => {
    const currentErrors: Error = {};
    const fields = Object.entries(data);

    fields.forEach((field: [string, Field]) => {
      const [key, { type, value }] = field;
      if (type === 'text') {
        currentErrors[key] = validateText(value);
      }
      if (type === 'email') {
        currentErrors[key] = validateEmail(value);
      }
      if (type === 'password') {
        currentErrors[key] = validatePassword(value);
      }
      if (type === 'number') {
        currentErrors[key] = validateNumber(value);
      }
    });

    setErrors(currentErrors);
    if (Object.values(currentErrors).join('').length > 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = useCallback((onSubmit: React.FormEventHandler<HTMLFormElement>) => (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleValidation(values)) onSubmit(event);
  }, [values]);

  return {
    values,
    errorMessage: errors,
    handleChange,
    handleSubmit,
    handleReset
  };
};

export default useForm;

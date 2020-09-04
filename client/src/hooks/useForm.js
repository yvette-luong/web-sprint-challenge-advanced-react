// write your custom hook here to control your checkout form
import { useLocalstorage } from './useLocalstorage';

export const useForm = (key, initialValue) => {

  const [values, setValues] = useLocalstorage(key, initialValue);

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValue);
  };

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

 
  return [values, clearForm, handleChanges];
};

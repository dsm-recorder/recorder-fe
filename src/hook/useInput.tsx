import { useCallback, useState } from 'react';
import { InputType } from '@/types';

export const useInput = <T,>(initialForm: T) => {
  const [form, setForm] = useState<T>(initialForm);
  const onChange = useCallback((e: InputType) => {
    const { name, value } = e.currentTarget;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  return { form, onChange, setForm };
};

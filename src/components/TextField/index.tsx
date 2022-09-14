import { useState, InputHTMLAttributes } from 'react';

import Spinner from 'components/Spinner';
import './styles.css';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  initialValue?: string;
  test?: (value: string) => void;
  loading?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  initialValue = '',
  onInputChange,
  loading = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <div className="text-field">
      <input type="text" onChange={onChange} value={value} {...props} />

      <Spinner show={loading} />
    </div>
  );
};

export default TextField;

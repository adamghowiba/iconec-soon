import { ComponentProps, FC } from 'react';
import { usePhoneInput } from 'react-international-phone';
import { Input } from './Input';

export interface PhoneInputProps extends ComponentProps<'input'> {
  onValueChange: (value: string) => void;
}

export const PhoneInput: FC<PhoneInputProps> = ({ value, onValueChange, ...props }) => {
  const { inputValue, handlePhoneValueChange, inputRef } = usePhoneInput({
    defaultCountry: 'ae',
    value: value as string,
    onChange: data => {
      onValueChange(data.phone || '');
    },
  });

  return <Input {...props} type="tel" value={inputValue} onChange={handlePhoneValueChange} ref={inputRef} />;
};

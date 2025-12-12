import { AsYouType } from 'libphonenumber-js';
import React, { useMemo } from 'react';
import { Input } from './Input';

const COUNTRY = 'AE';
const PREFIX_DIGITS = '971';
const PREFIX_E164 = '+971';

function digitsOnly(s: string) {
  return s.replace(/\D/g, '');
}

// returns ONLY the digits after 971
function toNationalDigits(anyInput: string) {
  const d = digitsOnly(anyInput);

  // if input includes 971 already (e.g. "+971...", "971...", formatted)
  if (d.startsWith(PREFIX_DIGITS)) return d.slice(PREFIX_DIGITS.length);

  // otherwise treat it as just national digits
  return d;
}

type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  value: string; // store NATIONAL digits only (no 971)
  onChange: (nationalDigits: string) => void;
};

export function PhoneInput({ value, onChange, ...rest }: PhoneInputProps) {
  const e164 = `${PREFIX_E164}${value || ''}`;

  const display = useMemo(() => {
    return new AsYouType(COUNTRY).input(e164);
  }, [e164]);

  return (
    <Input
      {...rest}
      inputMode="tel"
      autoComplete="tel"
      value={display}
      onChange={e => {
        const nationalDigits = toNationalDigits(e.target.value);
        onChange(nationalDigits);
      }}
    />
  );
}

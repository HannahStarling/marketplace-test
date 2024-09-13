import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { IUiFormControlProps, UiFormControl } from '@ui-components/form-controls/ui-form-controls';

interface IUiInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const UiInput: FC<IUiInputProps> = (props) => {
  return <input {...props} />;
};

export const UiInputFormControl: FC<Omit<IUiFormControlProps<IUiInputProps>, 'InputComponent'>> = (props) => {
  return <UiFormControl {...props} InputComponent={UiInput} />;
};

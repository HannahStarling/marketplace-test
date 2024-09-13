import './ui-time-picker-form-control.scss';
import React, { FC } from 'react';
import { TimePicker, TimeView } from '@mui/x-date-pickers';
import { IUiFormControlProps, UiFormControl } from '@ui-components/form-controls/ui-form-controls';

interface IUiTimePickerFormControlProps {
  name: string;
  views?: TimeView[];
}

export const UiTimePickerFormControl: FC<Omit<IUiFormControlProps<IUiTimePickerFormControlProps>, 'InputComponent'>> = ({ inputProps, ...props }) => {
  return (
    <UiFormControl
      {...props}
      className="picker"
      InputComponent={TimePicker}
      inputProps={{
        ...inputProps,
        views: inputProps?.views ?? ['hours', 'minutes'],
        slotProps: {
          textField: {
            className: 'picker-input ui-form-control__input',
            placeholder: 'Выберите время',
          },
          field: {
            format: 'HH:mm',
          },
        },
      }}
    />
  );
};

import './ui-date-picker-form-control.scss';
import React, { FC } from 'react';
import { DatePicker, DateView } from '@mui/x-date-pickers';
import { IUiFormControlProps, UiFormControl } from '@ui-components/form-controls/ui-form-controls';

interface IUiDatePickerFormControlProps {
  name: string;
  views?: DateView[];
}

export const UiDatePickerFormControl: FC<Omit<IUiFormControlProps<IUiDatePickerFormControlProps>, 'InputComponent'>> = ({ inputProps, ...props }) => {
  return (
    <UiFormControl
      {...props}
      className="picker"
      InputComponent={DatePicker}
      inputProps={{
        ...inputProps,
        views: inputProps?.views ?? ['day', 'month', 'year'],
        slotProps: {
          textField: {
            className: 'picker-input ui-form-control__input',
            placeholder: 'Выберите дату',
          },
          field: {
            format: 'DD.MM.YYYY',
          },
        },
      }}
    />
  );
};

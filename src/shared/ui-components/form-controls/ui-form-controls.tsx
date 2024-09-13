import './ui-form-controls.scss';
import React from 'react';
import { useField } from 'react-final-form';
import classNames from 'classnames';
import { IProps } from '@/types/common';

export interface IUiFormControlProps<T> extends IProps {
  name: string;
  label?: string;
  required?: boolean;
  content?: React.ReactNode;
  inputClassName?: string;
  addonLeft?: React.ReactNode;
  InputComponent: React.ComponentType<T>;
  inputProps?: T;
}

export const UiFormControl = <T extends object>({
  name,
  label,
  required,
  content,
  inputClassName,
  addonLeft,
  InputComponent,
  inputProps,
  className,
}: IUiFormControlProps<T>) => {
  const {
    input,
    meta: { error, touched },
  } = useField(name);
  const invalid = error && touched;

  return (
    <div className={classNames('ui-form-control', className)}>
      <label className="ui-form-control__label">
        {label} {required && <span className="ui-form-control__required">*</span>}
      </label>
      <div
        className={classNames('ui-form-control__input-container', {
          invalid,
        })}
      >
        {addonLeft && <div className="ui-form-control__input-icon ui-form-control__input-icon_left">{addonLeft}</div>}
        <InputComponent
          {...(inputProps as T)}
          {...input}
          value={input.value || null}
          className={classNames('ui-form-control__input', inputClassName)}
        />
      </div>
      {invalid ? <span className="ui-form-control__error">{error}</span> : <span className="ui-form-control__content">{content}</span>}
    </div>
  );
};

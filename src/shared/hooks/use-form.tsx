import arrayMutators from 'final-form-arrays';
import { FormApi } from 'final-form';
import { FC, FormEventHandler, useMemo } from 'react';
import { Form, FormProps } from 'react-final-form';
import { IProps } from '@/types/common';

export interface UiFormProps<T> extends IProps {
  initialValues?: Partial<T>;
  onSubmit: (values: T, form: FormApi<T>) => Object | Promise<Object> | void;
  onChange?: FormEventHandler<HTMLFormElement>;
}

export const useForm = <T extends unknown>() => {
  return useMemo(() => {
    const UiForm: FC<UiFormProps<T> & FormProps<T, Partial<T>>> = ({ children, onChange, mutators, validate, initialValues, ...props }) => (
      <Form
        {...props}
        initialValues={initialValues}
        validate={validate}
        mutators={{ ...arrayMutators, ...mutators }}
        render={({ handleSubmit }) => (
          <form autoComplete="off" {...props} onSubmit={handleSubmit}>
            {children}
          </form>
        )}
      />
    );
    return UiForm;
  }, []);
};

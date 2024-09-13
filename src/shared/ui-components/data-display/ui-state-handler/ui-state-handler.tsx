import React, { ReactElement } from 'react';
import { UiSpinner } from '@ui-components/data-display/ui-spinner/ui-spinner';
import { UiEmpty } from '@ui-components/data-display/ui-empty/ui-empty';
import { UiError } from '@ui-components/data-display/ui-error/ui-error';
import { IProps } from '@/types/common';

interface UiStateHandlerProps<T> extends IProps {
  data: T[];
  isLoading: boolean;
  error: boolean;
}

export const UiStateHandler = <T,>({ data, isLoading, error, children }: UiStateHandlerProps<T>): ReactElement => {
  if (isLoading) {
    return <UiSpinner />;
  }

  if (error) {
    return <UiError />;
  }

  if (!data.length) {
    return <UiEmpty />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

import React, { FC } from 'react';
import { UiDatePickerFormControl } from '@ui-components/form-controls/date-picker/ui-date-picker-form-control';
import { UiTimePickerFormControl } from '@ui-components/form-controls/time-picker/ui-time-picker-form-control';
import { UiInputFormControl } from '@ui-components/form-controls/input-text/ui-input-form-control';
import { renderIcons } from '@shared/utils/render-icons';
import { useForm } from '@shared/hooks/use-form';
import { OrderCheckoutTotal } from '@/components/forms/order-checkout-form/order-checkout-total';
import { DELIVERY_PRICE, ORDER_CHECKOUT_FORM_INITIAL_VALUES, ORDER_CHECKOUT_LEGEND_TEXT } from '@/features/order-checkout/constants';
import { FIELD_LABELS, FIELD_NAMES } from '@/shared/constants/form';
import { validateOrderCheckoutFormValues } from '@/features/order-checkout/helpers/validators/validate-order-checkout-form-values';
import { OrderCheckoutFormValues } from '@/types/order-history';

interface IOrderCheckoutFormProps {
  price: number;
  cartPrice: number;

  handleSubmit(values: OrderCheckoutFormValues): void;
}

export const OrderCheckoutForm: FC<IOrderCheckoutFormProps> = ({ handleSubmit, price, cartPrice }) => {
  const { Navigation } = renderIcons();
  const Form = useForm<OrderCheckoutFormValues>();

  return (
    <Form
      initialValues={ORDER_CHECKOUT_FORM_INITIAL_VALUES}
      validate={validateOrderCheckoutFormValues}
      onSubmit={handleSubmit}
      className="order-checkout__form"
    >
      <div>
        <fieldset className="order-checkout__form-fieldset">
          <legend className="order-checkout__form-legend">{ORDER_CHECKOUT_LEGEND_TEXT}</legend>
          <UiDatePickerFormControl required name={FIELD_NAMES.DELIVERY_DATE} />
          <UiTimePickerFormControl required name={FIELD_NAMES.DELIVERY_TIME} />
        </fieldset>
        <UiInputFormControl
          required
          name={FIELD_NAMES.ADDRESS}
          label={FIELD_LABELS[FIELD_NAMES.ADDRESS].label}
          inputProps={{ placeholder: FIELD_LABELS[FIELD_NAMES.ADDRESS].placeholder }}
          addonLeft={Navigation}
        />
        <UiInputFormControl required name={FIELD_NAMES.PHONE} label={FIELD_LABELS[FIELD_NAMES.PHONE].label} />
        <UiInputFormControl required name={FIELD_NAMES.NAME} label={FIELD_LABELS[FIELD_NAMES.NAME].label} />
      </div>
      <OrderCheckoutTotal totalPrice={price} cartPrice={cartPrice} deliveryPrice={DELIVERY_PRICE} />
    </Form>
  );
};

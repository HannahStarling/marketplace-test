import dayjs from 'dayjs';
import { REGEX } from '@shared/constants/common-strings';
import { ORDER_CHECKOUT_FORM_ERROR_MESSAGES } from '@/features/order-checkout/constants';
import { OrderCheckoutFormErrors, OrderCheckoutFormValues } from '@/types/order-history';

// Проверка обязательных полей
const validateRequiredFields = (values: OrderCheckoutFormValues) => {
  const errors: Partial<Record<keyof OrderCheckoutFormValues, string>> = {};
  const requiredFields: Array<keyof OrderCheckoutFormValues> = ['address', 'phone', 'name', 'deliveryDate', 'deliveryTime'];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = ORDER_CHECKOUT_FORM_ERROR_MESSAGES.REQUIRED;
    }
  });

  return errors;
};

// Проверка форматов
const validateFormats = (values: OrderCheckoutFormValues) => {
  const errors: Partial<Record<keyof OrderCheckoutFormValues, string>> = {};

  if (values.deliveryDate && !values.deliveryDate.isValid()) {
    errors.deliveryDate = ORDER_CHECKOUT_FORM_ERROR_MESSAGES.INVALID_DATE_FORMAT;
  }
  if (values.deliveryTime && !values.deliveryTime.isValid()) {
    errors.deliveryTime = ORDER_CHECKOUT_FORM_ERROR_MESSAGES.INVALID_TIME_FORMAT;
  }

  return errors;
};

const validateDateTime = (values: OrderCheckoutFormValues): OrderCheckoutFormErrors => {
  const errors: OrderCheckoutFormErrors = {};
  const now = dayjs();
  const minDateTime = now.add(1, 'hour');

  if (values.deliveryDate) {
    // Проверяем, что дата не раньше сегодняшнего дня
    if (values.deliveryDate.isBefore(now, 'day')) {
      errors.deliveryDate = ORDER_CHECKOUT_FORM_ERROR_MESSAGES.DATE_TOO_EARLY;
    }
  }

  if (values.deliveryDate && values.deliveryTime) {
    // Объединяем дату и время в один объект dayjs
    const deliveryDateTime = values.deliveryDate.set('hour', values.deliveryTime.hour()).set('minute', values.deliveryTime.minute());

    // Проверяем, что время не раньше текущего времени плюс один час
    if (deliveryDateTime.isBefore(minDateTime)) {
      errors.deliveryTime = ORDER_CHECKOUT_FORM_ERROR_MESSAGES.TIME_TOO_EARLY;
    }
  }

  return errors;
};
// Проверка дополнительных полей
const validateAdditionalFields = (values: OrderCheckoutFormValues) => {
  const errors: Partial<Record<keyof OrderCheckoutFormValues, string>> = {};

  // Проверка формата телефонного номера
  if (values.phone && !REGEX.PHONE_SIMPLE.test(values.phone)) {
    errors.phone = ORDER_CHECKOUT_FORM_ERROR_MESSAGES.INVALID_PHONE;
  }

  // Проверка длины имени
  if (values.name && (values.name.length < 2 || values.name.length > 50)) {
    errors.name = ORDER_CHECKOUT_FORM_ERROR_MESSAGES.NAME_LENGTH;
  }

  // Проверка формата адреса
  if (values.address && !REGEX.ADDRESS_SIMPLE.test(values.address)) {
    errors.address = ORDER_CHECKOUT_FORM_ERROR_MESSAGES.INVALID_ADDRESS;
  }

  return errors;
};

// Основная функция валидации
export const validateOrderCheckoutFormValues = (values: OrderCheckoutFormValues) => {
  return {
    ...validateRequiredFields(values),
    ...validateFormats(values),
    ...validateDateTime(values),
    ...validateAdditionalFields(values),
  };
};

import dayjs from 'dayjs';
import { EMPTY_STRING } from '@shared/constants/common-strings';

// Начальные значения формы заказа
export const ORDER_CHECKOUT_FORM_INITIAL_VALUES = {
  deliveryDate: dayjs(), // Текущая дата
  deliveryTime: dayjs().add(1, 'hour'), // Текущее время + 1 час
  address: EMPTY_STRING,
  phone: EMPTY_STRING,
  name: EMPTY_STRING,
};

// Константы для сообщений об ошибках формы заказа
export const ORDER_CHECKOUT_FORM_ERROR_MESSAGES = {
  REQUIRED: 'Поле обязательно',
  INVALID_DATE_FORMAT: 'Введите дату в формате DD.MM.YYYY',
  INVALID_TIME_FORMAT: 'Введите время в формате HH:mm',
  DATE_TOO_EARLY: 'Дата не может быть раньше текущего дня',
  TIME_TOO_EARLY: 'Дата и время должны быть не ранее чем через 1 час от текущего времени',
  INVALID_PHONE: 'Введите корректный номер телефона',
  NAME_LENGTH: 'Имя должно содержать от 2 до 50 символов',
  INVALID_ADDRESS: 'Введите корректный адрес',
};

// так как нет логики расчёта доставки хардкодим стоимость
export const DELIVERY_PRICE = 200;
export const ORDER_CHECKOUT_LEGEND_TEXT = 'Когда доставить?';

import { PropsWithChildren } from 'react';

export interface IProps extends PropsWithChildren {
  className?: string;
}

export type CleanObject<T> = T extends Array<infer U> ? CleanObject<U>[] : T extends Record<string, any> ? { [K in keyof T]?: CleanObject<T[K]> } : T;

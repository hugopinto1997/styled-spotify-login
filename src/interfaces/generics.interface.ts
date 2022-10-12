import { ComponentPropsWithoutRef, JSXElementConstructor } from 'react';

import {
  AnyStyledComponent,
  StyledComponentInnerComponent,
  StyledComponentInnerOtherProps,
} from 'styled-components';

export type InferComponentProps<T> = T extends AnyStyledComponent
  ? ComponentPropsWithoutRef<StyledComponentInnerComponent<T>> &
      StyledComponentInnerOtherProps<T>
  : T extends keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>
  ? ComponentPropsWithoutRef<T>
  : never;

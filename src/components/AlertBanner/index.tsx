import React from 'react';

import { AlertBanner, AlertBannerProps, AlertText } from './styles.styled';

type FormAlertProps = {
  text: string;
} & AlertBannerProps;

const FormAlert = ({ hidden, type, text }: FormAlertProps) => {
  return (
    <AlertBanner hidden={hidden} type={type}>
      <AlertText>{text}</AlertText>
    </AlertBanner>
  );
};

export default FormAlert;

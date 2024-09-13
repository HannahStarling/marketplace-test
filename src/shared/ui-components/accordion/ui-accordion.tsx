import { styled } from '@mui/material/styles';
import { Accordion } from '@mui/material';
import { FC } from 'react';
import { AccordionProps } from '@mui/material/Accordion/Accordion';

const UiCustomAccordion = styled(Accordion)(() => ({
  '&:last-of-type': {
    borderRadius: '32px',
    margin: 0,
  },
  '&:first-of-type': {
    borderRadius: '32px',
    margin: 0,
  },
  '&:before': {
    display: 'none',
  },
  borderRadius: '32px',
  boxShadow: 'none',
  background: '#FFF',
  border: '1px solid #AEC2EA',
  height: 'fit-content',
  margin: 0,
}));

interface IUiAccordionProps extends AccordionProps {}

export const UiAccordion: FC<IUiAccordionProps> = ({ ...props }) => {
  return <UiCustomAccordion {...props} />;
};

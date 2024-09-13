import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { FC } from 'react';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import { useAccordion } from '@shared/hooks/use-accordion';
import { UiAccordion } from '@/shared/ui-components/accordion/ui-accordion';
import { OrderHistoryType } from '@/types/order-history';
import { OrderHistoryDetails } from '@/components/order-history/details';
import { OrderHistorySummary } from '@/components/order-history/summary';

interface IOrderHistoryComponentProps {
  orderHistory: OrderHistoryType[];
}

export const OrderHistoryComponent: FC<IOrderHistoryComponentProps> = ({ orderHistory }) => {
  const { expanded, handleExpandedChange } = useAccordion();

  return (
    <div className="order-history__list">
      {orderHistory.map(({ id, name, date, items, price, address }) => (
        <UiAccordion key={id} expanded={expanded[id]} onChange={handleExpandedChange(id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${id}-content`}
            id={`panel${id}-header`}
            className="order-history__accordion-summary"
          >
            <OrderHistorySummary id={id} name={name} date={date} />
          </AccordionSummary>
          <AccordionDetails>
            <OrderHistoryDetails amount={items.length} id={id} price={price} address={address} />
          </AccordionDetails>
        </UiAccordion>
      ))}
    </div>
  );
};

import React, { useState } from 'react';

export const useAccordion = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const handleExpandedChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded((prev) => ({ ...prev, [panel]: isExpanded }));
  };

  return {
    expanded,
    handleExpandedChange,
  };
};

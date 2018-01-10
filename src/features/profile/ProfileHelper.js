import React from 'react';
import { IconCard, TextCard, StepCard } from './cards/index';

export function renderCard(facet) {
  switch (facet.type) {
  case 'text-only':
    return <TextCard {...facet.data} />;

  case 'image-icons':
    return <IconCard {...facet.data} />;

  case 'steps':
    return <StepCard {...facet.data} />;

  default:
    return <div />;
  }
}

export const ROW_GUTTER = { xs: 8, sm: 16, md: 24 };

export const COL_LAYOUT = {
  xs: { span: 22 },
  sm: { span: 22 },
  md: { span: 22 },
  lg: { span: 12 },
  xl: { span: 12 },
  xxl: { span: 12 },
};

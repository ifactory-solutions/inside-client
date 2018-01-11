import React from 'react';
import { IconCard, TextCard, StepCard, ChartCard } from './cards/index';

export function renderCard(facet) {
  switch (facet.type) {
  case 'text-only':
    return <TextCard {...facet.data} key={facet.id} />;

  case 'image-icons':
    return <IconCard {...facet.data} key={facet.id} />;

  case 'steps':
    return <StepCard {...facet.data} key={facet.id} />;

  case 'charts':
    return (
      <ChartCard
        {...facet.data}
        key={facet.id}
        dataKey="name"
        valuesKey="value"
      />
    );

  default:
    return <div />;
  }
}

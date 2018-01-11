import React from 'react';
import { IconCard, TextCard, StepCard, ChartCard } from './cards/index';

export function renderCard(facet) {
  switch (facet.type) {
  case 'text-only':
    return (
      <div className="masonry-item" key={facet.id}>
        <TextCard {...facet.data} />{' '}
      </div>
    );

  case 'image-icons':
    return (
      <div className="masonry-item" key={facet.id}>
        <IconCard {...facet.data} />{' '}
      </div>
    );

  case 'steps':
    return (
      <div className="masonry-item" key={facet.id}>
        <StepCard {...facet.data} />{' '}
      </div>
    );

  case 'charts':
    return (
      <div key={facet.id} className="masonry-item">
        <ChartCard {...facet.data} dataKey="name" valuesKey="value" />
      </div>
    );

  default:
    return <div />;
  }
}

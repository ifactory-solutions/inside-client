import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';
import { ResponsiveContainer, BarChart, YAxis, XAxis, Bar } from 'recharts';

export const ChartCard = props => {
  const { content: dataset, dataKey, valuesKey } = props;

  return (
    <Card title={props.title} className="card" hoverable>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={dataset}
          layout="vertical"
          barCategoryGap={9}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis type="category" dataKey={dataKey} axisLine={false} />

          <Bar dataKey={valuesKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

ChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.instanceOf(Array).isRequired,
  dataKey: PropTypes.string.isRequired,
  valuesKey: PropTypes.string.isRequired,
};

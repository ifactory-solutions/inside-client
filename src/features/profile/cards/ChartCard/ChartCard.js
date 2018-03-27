import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { Card } from 'antd';
import { ResponsiveContainer, BarChart, YAxis, XAxis, Bar } from 'recharts';

import './ChartCard.scss';

export const ChartCard = props => {
  const { content, dataKey, valuesKey } = props;
  const dataset = _.chain(content)
    .sortBy([valuesKey])
    .reverse()
    .value();

  return (
    <div className="profile-card">
      <Card title={props.title} hoverable>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dataset} layout="vertical" barCategoryGap={9}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey={dataKey} axisLine={false} />
            <Bar dataKey={valuesKey} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

ChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.instanceOf(Array).isRequired,
  dataKey: PropTypes.string.isRequired,
  valuesKey: PropTypes.string.isRequired,
};

import React from 'react';
import { Card, Avatar } from 'antd';
import './EmployeeCard.css';

const { Meta } = Card;

// const src = 'https://gw.alipayobjects.com/zos/' +
// 'rmsportal/JiqGstEfoWAOHiTxclqi.png';
const src2 = `https://image.tmdb.org/t/p/w45/
iiBJCkVVLHAUBW6vbUhJ3RtxlXv.jpg`;

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const EmployeeCard = () => {
  return (
    <Card className="employee-card">
      <Meta
        avatar={
          <Avatar
            src={src2}
            shape="square"
            className="avatar"
            size="large"
          />
        }
        title="Daisy Ridley"
        description="Dev 3"
      />
      <div className="info">Devry USA</div>
      <div className="info">
        <span className="badge">Angular 2</span>
        <span className="badge">React</span>
        <span className="badge">Redux</span>
        <span className="badge">Java</span>
      </div>
    </Card>
  );
};

export default EmployeeCard;

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
        description="Desenvolvedor Nível 3"
      />
      <div className="info">Devry USA</div>
      <div className="info">
        <div className="badge">Angular 2</div>
        <div className="badge">React</div>
        <div className="badge">Redux</div>
        <div className="badge">Java</div>
        <div className="badge">C#</div>
        <div className="badge">Functional Programming</div>
      </div>
    </Card>
  );
};

export default EmployeeCard;

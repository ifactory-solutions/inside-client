import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

// const src = 'https://gw.alipayobjects.com/zos/' +
// 'rmsportal/JiqGstEfoWAOHiTxclqi.png';
const src2 = `https://image.tmdb.org/t/p/w45/
iiBJCkVVLHAUBW6vbUhJ3RtxlXv.jpg`;

const badgeStyle = {
  padding: 8,
  borderRadius: 14,
  background: '#eee',
  fontSize: 11,
  marginRight: 10,
};

const avatarStyle = {
  width: 45,
  height: 68,
};

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const EmployeeCard = () => {
  return (
    <Card style={{ width: 300 }}>
      <Meta
        avatar={
          <Avatar
            src={src2}
            shape="square"
            style={avatarStyle}
            size="large"
          />
        }
        title="Daisy Ridley"
        description="Dev 3"
      />
      <div style={{ marginTop: 21 }}>Devry USA</div>
      <div style={{ marginTop: 21 }}>
        <span style={badgeStyle}>Angular 2</span>
        <span style={badgeStyle}>React</span>
        <span style={badgeStyle}>Redux</span>
        <span style={badgeStyle}>Java</span>
      </div>
    </Card>
  );
};

export default EmployeeCard;

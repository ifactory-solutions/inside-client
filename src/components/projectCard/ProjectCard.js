import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const src = 'https://gw.alipayobjects.com/zos/' +
'rmsportal/JiqGstEfoWAOHiTxclqi.png';
const src2 = 'https://gw.alipayobjects.com/zos/' +
'rmsportal/JiqGstEfoWAOHiTxclqi.png';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const ProjectCard = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={src}
        />}
      actions={[
        <Icon type="setting" />,
        <Icon type="edit" />,
        <Icon type="ellipsis" />]}
    >
      <Meta
        avatar={<Avatar src={src2} />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

export default ProjectCard;

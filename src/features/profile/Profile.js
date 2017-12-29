import React from 'react';
import { Avatar, Row, Col } from 'antd';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const Profile = () => {
  const src = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'; // eslint-disable-line
  return (
    <Row type="flex" justify="start">
      <Col
        md={{ span: 24 }}
        lg={{ span: 12 }}
        xl={{ span: 4 }}
        style={{ marginBottom: '20px' }}>
        <Avatar
          src={src}
          style={{ width: '100px', height: '100px', borderRadius: '70px' }} />
      </Col>
      <Col
        md={{ span: 24 }}
        lg={{ span: 12 }}
        xl={{ span: 8 }}
        style={{ marginBottom: '20px' }}>
        <div>
          <h2>
              Alex Smith
          </h2>
          <h4>Founder of Groupeq</h4>
          <small>
              There are many variations of passages of Lorem
              Ipsum available, but the majority
              have suffered alteration in some form Ipsum available.
          </small>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;

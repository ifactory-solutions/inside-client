import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import PropTypes from 'prop-types';

import {
  ROW_GUTTER,
  PICTURE_LAYOUT,
  IMAGE_SOURCE,
  USER_INFO_LAYOUT,
  DETAILS_LAYOUT,
} from './ProfileHeaderConstants';

import './ProfileHeader.css';

class ProfileHeader extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Row
          type="flex"
          justify="center"
          gutter={ROW_GUTTER}
          className="profile-header"
        >
          <Col {...PICTURE_LAYOUT}>
            <img
              className="avatar"
              alt="profile"
              src={user.imgSrc || IMAGE_SOURCE}
            />
          </Col>

          <Col {...USER_INFO_LAYOUT} className="user-info">
            <div className="top">
              <h1>{user.nickname}</h1>
              <h4>{user.fullName}</h4>
            </div>

            <div className="bottom">
              <h3>{user.role.toUpperCase()}</h3>
              <h3>{user.level.toUpperCase()}</h3>
            </div>
          </Col>

          <Col {...DETAILS_LAYOUT} className="user-detail">
            <div>
              <h4>{user.birthdate}</h4>
              <h4>{user.location}</h4>
              <h4>{user.email}</h4>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Divider className="divider" />
        </Row>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default ProfileHeader;

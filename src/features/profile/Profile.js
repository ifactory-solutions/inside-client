import React from 'react';
import { Row, Col } from 'antd';

import ProfileHeader from './header/ProfileHeader';
import { PROFILE as profile } from '../../mock/profile';

import { ROW_GUTTER, COL_LAYOUT, renderCard } from './ProfileHelper';

const Profile = () => {
  const cards = profile.facets.map(facet => (
    <Col key={facet.id} {...COL_LAYOUT}>
      {renderCard(facet)}
    </Col>
  ));

  return (
    <div>
      <ProfileHeader user={profile.user} />
      <Row type="flex" justify="left" gutter={ROW_GUTTER}>
        {cards}
      </Row>
    </div>
  );
};

export default Profile;

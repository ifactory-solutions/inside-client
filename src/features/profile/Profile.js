import React from 'react';
import ProfileHeader from './header/ProfileHeader';
import { PROFILE as profile } from '../../mock/profile';

import { renderCard } from './ProfileHelper';

import './Profile.css';

export default class Profile extends React.Component {
  render() {
    const cards = profile.facets.map(facet => renderCard(facet));

    return (
      <div>
        <ProfileHeader user={profile.user} />
        <div className="masonry"> {cards} </div>
      </div>
    );
  }
}

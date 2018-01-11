import React from 'react';
import Bricklayer from 'bricklayer';

import ProfileHeader from './header/ProfileHeader';
import { PROFILE as profile } from '../../mock/profile';

import { renderCard } from './ProfileHelper';

import './Profile.css';

export default class Profile extends React.Component {
  componentDidMount() {
    this.bricklayer = new Bricklayer(document.querySelector('.bricklayer'));
  }

  componentDidUpdate() {
    this.bricklayer.redraw();
  }

  render() {
    const cards = profile.facets.map(facet => renderCard(facet));

    return (
      <div>
        <ProfileHeader user={profile.user} />
        <div className="bricklayer">{cards}</div>
      </div>
    );
  }
}

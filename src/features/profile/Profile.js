import React from 'react';

import ProfileHeader from './header/ProfileHeader';
import { PROFILE as profile } from '../../mock/profile';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const Profile = () => {
  return <ProfileHeader user={profile.user} />;
};

export default Profile;

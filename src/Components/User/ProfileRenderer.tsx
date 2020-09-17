import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { UserProfile, PartialPost } from "../../common/types";
import { getUserProfile } from "../../common/requests";
import UserProfileComponent from "./UserProfileComponent";

interface ProfileRendererProps {
  profileId: number;
}

const ProfileRenderer = (props: ProfileRendererProps) => {
  const [profileData, setProfileData] = useState<UserProfile>();

  useEffect(() => {
    getUserProfile(1, setProfileData);
  }, []);

  const visibleComponent = profileData ? (
    <UserProfileComponent profileData={profileData} />
  ) : (
    <Container>LOADING</Container>
  );
  return visibleComponent;
};

export default ProfileRenderer;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserProfile, PartialPost } from "../../common/types";
import { getUserProfile } from "../../common/requests";
import UserProfileComponent from "./UserProfileComponent";
import Loader from '../Loader/Loader';
import { Navbar } from '../Navbar/Navbar';

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
    <Container>
      <Navbar />
      <Row>
        <Col>
            <Loader />
        </Col>
      </Row>
    </Container>
  );
  return visibleComponent;
};

export default ProfileRenderer;

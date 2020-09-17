import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar } from "../Navbar/Navbar";
import { UserProfile, PartialPost } from "../../common/types";
import {
  BottomLeftAligned,
  BottomRightAligned,
  SubHeader,
  ProfileBannerWrapper,
  UsernameHeader,
  UsernameSubtext,
  UsernameWrapper,
} from "./User.components";
import { getUserProfile, getUserPosts } from "../../common/requests";
import Card from "../../Components/Card/Card";

interface UserProfileProps {
  profileData: UserProfile;
}
//TO-DO: Fix dynamic rendering of user pforile details
const UserProfileComponent = (props: UserProfileProps) => {
  const [userPosts, setUserPosts] = useState<PartialPost[]>();
  const profileData = props.profileData || {};
  useEffect(() => {
    getUserPosts(profileData.user_id, setUserPosts);
  }, []);

  return (
    <Container>
      <Navbar />
      <ProfileBannerWrapper>
        <Row>
          <Col>
            <BottomLeftAligned>
              <SubHeader>
                Interests: {profileData.interests || "No interests set"}
              </SubHeader>
              <SubHeader>
                Skills: {profileData.skills || "No skills set"}
              </SubHeader>
            </BottomLeftAligned>
          </Col>
          <Col>
            <UsernameWrapper>
              <UsernameHeader>{profileData.username}</UsernameHeader>
              <UsernameSubtext>Member since day one</UsernameSubtext>
            </UsernameWrapper>
          </Col>
          <Col>
            <BottomRightAligned>
              <SubHeader>URL: {profileData.url || "No URL set"}</SubHeader>
            </BottomRightAligned>
          </Col>
        </Row>
      </ProfileBannerWrapper>
      <Row>
        {userPosts &&
          userPosts.map((post) => {
            return (
              <Col lg={4} md={6}>
                <Card data={post} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default UserProfileComponent;

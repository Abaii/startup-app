import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  HeadingText,
  HeadingContainer,
  DescriptionContainer,
  ButtonWrapper,
  BodyInputWrapper,
} from "./PostForm.components";
import { Icon } from "../../Card/Card.components";
import { Navbar } from "../../Navbar/Navbar";
import { CallToAction } from "../../Button/Button.components";
import { SinglePost } from "../../../common/types";

interface SinglePostProps {
  data: SinglePost;
}
const SinglePostComponent = (props: SinglePostProps) => {
  const postData = props.data;
  return (
    <Container>
      <Navbar />
      <Row>
        <Icon />
      </Row>
      <Row>
        <Col>
          <HeadingContainer>
            <HeadingText>
              <Row>{postData.line_one}</Row>
              <Row>{postData.line_two}</Row>
              <Row>{postData.line_three}</Row>
            </HeadingText>
          </HeadingContainer>
        </Col>
      </Row>
      <Row>
        <DescriptionContainer>{postData.long_text}</DescriptionContainer>
      </Row>
      <Row>
        <Col>
          <BodyInputWrapper>
            URL:
            {postData.external_link}
          </BodyInputWrapper>
        </Col>
        <Col>
          <BodyInputWrapper>
            Tags:
            {postData.tags}
          </BodyInputWrapper>
        </Col>
      </Row>
      <Row>
        <ButtonWrapper>
          <CallToAction>I'm interested</CallToAction>
        </ButtonWrapper>
      </Row>
    </Container>
  );
};

export default SinglePostComponent;

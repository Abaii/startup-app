import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Card from '../../Components/Card/Card';
import { Navbar } from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import { tokens } from '../../assets/tokens';

const PostsTitle = styled.h2`
    margin: 30px auto;
    font-size: 52px; 
    font-weight: bold;
`;

const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 150px 0 50px 0;
`;

const PostsSubtitle = styled.h3`
    font-size: 24px;
    color: ${tokens.color.tertiaryColor};
`;

const Posts = () => (
  <Container>
    <Navbar />
    <Row>
      <Col xs={12}>
        <PostsWrapper>
          <PostsSubtitle>Find a project you're passionate about.</PostsSubtitle>
          <PostsTitle>Projects created by the community.</PostsTitle>
          <Search />
        </PostsWrapper>
      </Col>
    </Row>
    <Row>
      <Col lg={4} md={6}>
        <Card title="Wagwan g" />

      </Col>
      <Col lg={4} md={6}>
        <Card />
      </Col>
      <Col lg={4} md={6}>
        <Card />
      </Col>
      <Col lg={4} md={6}>
        <Card />

      </Col>
      <Col lg={4} md={6}>
        <Card />
      </Col>
      <Col lg={4} md={6}>
        <Card />
      </Col>
    </Row>
  </Container>
);

export default Posts;

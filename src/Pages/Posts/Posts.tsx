import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Card from '../../Components/Card/Card';
import { Navbar } from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import { tokens } from '../../assets/tokens';
import axios from 'axios';
import { PartialPost } from '../../common/types';

const PostsTitle = styled.h2`
    margin: 30px auto;
    font-size: 52px; 
    font-weight: bold;
    color: ${tokens.color.tertiaryColor};
`;

const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 100px 0 50px 0;
`;

const PostsSubtitle = styled.h3`
    font-size: 24px;
    color: ${tokens.color.secondaryColor};
`;


const Posts = () => {
  const [postData, setPostData] = useState<PartialPost[]>();
  
  useEffect(() => {
    (async () => {
      const { data } = await axios.post('http://localhost:3001/getposts', { ids: [1, 2, 3, 4] }, { withCredentials: true });
      setPostData(data.data);
    })();
  }, []);

  return (
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
      { postData && postData.map((post) => {
        return (
          <Col lg={4} md={6}>
            <Card data={post} />
          </Col>
        )
      })}
    </Row>
  </Container>
)};

export default Posts;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Card from "../../Components/Card/Card";
import { Navbar } from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import { tokens } from "../../assets/tokens";
import { getAllPosts } from "../../common/requests";
import { PartialPost } from "../../common/types";
import Pagination from '@material-ui/lab/Pagination';

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

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0;
`

const Posts = () => {
  const [postData, setPostData] = useState<PartialPost[]>();
  const [page, setPage] = useState(1);
  const handlePageChange = (event: any, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    getAllPosts(setPostData, page);
    console.log('hit')
  }, [page]);

  return (
    <Container>
      <Navbar />
      <Row>
        <Col xs={12}>
          <PostsWrapper>
            <PostsSubtitle>
              Find a project you're passionate about.
            </PostsSubtitle>
            <PostsTitle>Projects created by the community.</PostsTitle>
            <Search handleResults={setPostData} />
          </PostsWrapper>
        </Col>
      </Row>
      <Row>
        {postData &&
          postData.map((post) => {
            return (
              <Col lg={4} md={6}>
                <Card data={post} />
              </Col>
            );
          })}
      </Row>
      <Row>
        <Col>
          <PaginationWrapper>
            <Pagination count={10} page={page} onChange={handlePageChange} size="large" color="primary" variant="outlined" shape="rounded"/>
          </PaginationWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;

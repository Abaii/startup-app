import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../Components/Card/Card";
import { Navbar } from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import { getAllPosts } from "../../common/requests";
import { PartialPost } from "../../common/types";
import Pagination from '@material-ui/lab/Pagination';
import {
  PostsWrapper,
  PostsSubtitle,
  PostsTitle,
  PaginationWrapper,
  NoPosts,
} from './Posts.components';


const Posts = () => {
  const [postData, setPostData] = useState<PartialPost[]>();
  const [page, setPage] = useState(1);
  const handlePageChange = (value: number) => {
    setPage(value)
  }

  useEffect(() => {
    getAllPosts(setPostData, page);
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
        {!postData?.length &&
          <NoPosts>We couldn't find any posts.</NoPosts>
        } 
        {postData && postData.length &&
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
            <Pagination count={1} 
              page={page} 
              onChange={(e) => handlePageChange} 
              size="large" 
              color="primary" 
              variant="outlined" 
              shape="rounded"/>
          </PaginationWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;

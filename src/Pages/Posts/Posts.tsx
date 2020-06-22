import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../../Components/Card/Card';
import { Navbar } from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import styled from 'styled-components';

const PostsTitle = styled.h2`
    margin: 20px auto;
    font-size: 62px;    
`;

const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
`
const Posts = () => {
    return (
        <Container fluid>
            <Navbar/>
            <Row>
                <Col>
                    <PostsWrapper>
                        <PostsTitle>Posts</PostsTitle>
                        <Search />
                    </PostsWrapper>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={6}>
                    <Card />
                    
                </Col>
                <Col lg={3} md={6}>
                    <Card />
                </Col>
                <Col lg={3} md={6}>
                    <Card />
                </Col>
                <Col lg={3} md={6}>
                    <Card />
                </Col>
            </Row>
        </Container>
    )
};

export default Posts;
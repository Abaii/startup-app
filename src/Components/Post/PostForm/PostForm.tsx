import React, { useState } from 'react';
import { HeaderInput, HeadingText, HeadingContainer, DescriptionContainer, DescriptionText, DescriptionInput, ButtonWrapper } from './PostForm.components';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from '../../Navbar/Navbar';
import { CallToAction } from '../../Button/Button.components';

const PostForm = () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [business, setBusiness] = useState('');
    const [description, setDescription] = useState('')

    const onBusinessChange = (e: any) => {
        setBusiness(e.target.value);
    }
    const onRoleChange = (e: any) => {
        setRole(e.target.value);
    }
    const onNameChange = (e: any) => {
        setName(e.target.value);
    };

    const onDescriptionChange = (e: any) => {
        setDescription(e.target.value);
    }

    return (
        <Container>
            <Navbar/>
            <Row>
                <Col>
                    <HeadingContainer>
                        <HeadingText>Hey, we're{" "}
                            <HeaderInput 
                                value={name} 
                                onChange={onNameChange} 
                                placeholder="Name or Company name" 
                                size={name.length}
                                maxLength={20}
                            />
                            And we are looking for{" "}
                            <HeaderInput 
                                value={role} 
                                onChange={onRoleChange} 
                                size={role.length}
                                placeholder="designer, developer, artists..."
                                maxLength={20}
                            />
                                for our{" "}
                            <HeaderInput 
                                value={business} 
                                onChange={onBusinessChange} 
                                size={business.length}
                                placeholder="your idea I.E our charity"
                                maxLength={20}
                            />
                        </HeadingText>
                    </HeadingContainer>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DescriptionContainer>
                        <DescriptionInput
                            value={description}
                            onChange={onDescriptionChange}
                            cols={40}
                            rows={5}
                            placeholder="Add any additional information"
                        />
                    </DescriptionContainer>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonWrapper>
                        <CallToAction>Create post</CallToAction>
                    </ButtonWrapper>
                </Col>
            </Row>
        </Container>
    )
};

export default PostForm;
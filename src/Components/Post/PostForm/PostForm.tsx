import React, { useState } from "react";
import {
  HeaderInput,
  HeadingText,
  HeadingContainer,
  DescriptionContainer,
  DescriptionText,
  DescriptionInput,
  ButtonWrapper,
} from "./PostForm.components";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar } from "../../Navbar/Navbar";
import { CallToAction } from "../../Button/Button.components";
import axios from "axios";

const PostForm = () => {
  const [post_author, setPostAuthor] = useState("");
  const [target_audience, setTargetAudience] = useState("");
  const [idea_description, setDescription] = useState("");
  const [long_text, setLongText] = useState("");
  const [pronoun, setPronoun] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [external_link, setExternalLink] = useState("");

  const [payload, updatePayload] = useState({});

  //   {"idea_description": "",
  //                                      "target_audience": @minValidPostJson[:target_audience],
  //                                      "pronoun": @minValidPostJson[:pronoun],
  //                                      "post_author": @minValidPostJson[:post_author],
  //                                      "category": @minValidPostJson[:category]}}

  const handleInputChange = (handler: any) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newPayload = {
      ...payload,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    updatePayload(newPayload);
    handler(e.target.value);
  };

  const submitFunction = (payload: any) => {
    axios.post("http://localhost:3001/post", { newPost: payload });
  };

  const onSubmit = async () => {
    const result = await submitFunction(payload);
    return result;
  };

  return (
    <Container>
      <Navbar />
      <Row>
        <Col>
          <HeadingContainer>
            <HeadingText>
              Hey, we're{" "}
              <HeaderInput
                value={post_author}
                name={"post_author"}
                onChange={handleInputChange(setPostAuthor)}
                placeholder="Name or Company name"
                size={post_author.length}
                maxLength={20}
              />
              And we are looking for{" "}
              <HeaderInput
                value={target_audience}
                name={"target_audience"}
                onChange={handleInputChange(setTargetAudience)}
                size={target_audience.length}
                placeholder="designer, developer, artists..."
                maxLength={20}
              />
              for our{" "}
              <HeaderInput
                value={idea_description}
                name={"idea_description"}
                onChange={handleInputChange(setDescription)}
                size={idea_description.length}
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
              value={long_text}
              name={"long_text"}
              onChange={handleInputChange(setLongText)}
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
            <CallToAction onClick={onSubmit}>Create post</CallToAction>
          </ButtonWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default PostForm;

import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import {
  HeaderInput,
  HeadingText,
  HeadingContainer,
  DescriptionContainer,
  DescriptionInput,
  ButtonWrapper,
  BodyInput,
  BodyInputWrapper,
} from "./PostForm.components";
import { Navbar } from "../../Navbar/Navbar";
import { CallToAction } from "../../Button/Button.components";
import { PostCategorySelector } from "./PostCategroySelector";
import { PronounSelector } from "./PronounSelector";

import bettering_tomorrow from "../../../assets/categories/bettering_tomorrow.svg";
import business from "../../../assets/categories/business.svg";
import community from "../../../assets/categories/community.svg";
import technology from "../../../assets/categories/technology.svg";
import the_arts from "../../../assets/categories/the_arts.svg";

const categoryFormConfig = {
  bettering_tomorrow: {
    name: "Better Tomorrow",
    image: bettering_tomorrow,
  },
  business: { name: "Business", image: business },
  community: { name: "Community", image: community },
  technology: { name: "Technology", image: technology },
  the_arts: { name: "The Arts", image: the_arts },
};

const PostForm = () => {
  const [post_author, setPostAuthor] = useState("");
  const [target_audience, setTargetAudience] = useState("");
  const [idea_description, setDescription] = useState("");
  const [long_text, setLongText] = useState("");
  const [pronoun, setPronoun] = useState("We're");
  const [category, setCategory] = useState("bettering_tomorrow");
  const [external_link, setExternalLink] = useState("");
  const [tags, setTags] = useState("");

  const [payload, updatePayload] = useState({
    pronoun: "We're",
    category: "bettering_tomorrow",
  });

  const handleInputChange = (handler: any) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPayload = {
      ...payload,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    updatePayload(newPayload);
    handler(e.target.value);
  };

  const handleArrayChange = (handler: any) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPayload = {
      ...payload,
      [e.currentTarget.name]: [e.currentTarget.value],
    };
    updatePayload(newPayload);
    handler([e.target.value]);
  };

  const handleStateChange = (handler: any) => (
    newState: string,
    stateToChange: string
  ) => {
    const newPayload = {
      ...payload,
      [stateToChange]: newState,
    };
    updatePayload(newPayload);
    handler(newState);
  };

  const submitFunction = (payload: any) => {
    axios.post(
      "http://localhost:3001/post",
      { newPost: payload },
      { withCredentials: true }
    );
  };

  const onSubmit = async () => {
    const result = await submitFunction(payload);
    return result;
  };

  return (
    <Container>
      <Navbar />
      <Row>
        <PostCategorySelector
          config={categoryFormConfig}
          submitFunction={handleStateChange(setCategory)}
          activeCategory={category}
        />
      </Row>
      <Row>
        <Col>
          <HeadingContainer>
            <HeadingText>
              <Row>
                Hey,{" "}
                <PronounSelector
                  onClick={handleStateChange(setPronoun)}
                  activePronoun={pronoun}
                />
                <HeaderInput
                  value={post_author}
                  name={"post_author"}
                  onChange={handleInputChange(setPostAuthor)}
                  placeholder="Name or Company name"
                  size={post_author.length}
                  maxLength={20}
                />
              </Row>
              <Row>
                And we are looking for{" "}
                <HeaderInput
                  value={target_audience}
                  name={"target_audience"}
                  onChange={handleInputChange(setTargetAudience)}
                  size={target_audience.length}
                  placeholder="designer, developer, artists..."
                  maxLength={30}
                />
              </Row>
              <Row>
                for our{" "}
                <HeaderInput
                  value={idea_description}
                  name={"idea_description"}
                  onChange={handleInputChange(setDescription)}
                  size={idea_description.length}
                  placeholder="your idea I.E our charity"
                  maxLength={20}
                />
              </Row>
            </HeadingText>
          </HeadingContainer>
        </Col>
      </Row>
      <Row>
        <DescriptionContainer>
          <DescriptionInput
            value={long_text}
            name={"long_text"}
            onChange={handleInputChange(setLongText)}
            cols={40}
            rows={5}
            maxLength={200}
            placeholder="Add any additional information"
          />
        </DescriptionContainer>
      </Row>
      <Row>
        <Col>
          <BodyInputWrapper>
            URL:
            <BodyInput
              value={external_link}
              name={"external_link"}
              onChange={handleInputChange(setExternalLink)}
              size={external_link.length}
              placeholder="A link to your website"
              maxLength={20}
            />
          </BodyInputWrapper>
        </Col>
        <Col>
          <BodyInputWrapper>
            Tags:
            <BodyInput
              value={tags}
              name={"tags"}
              onChange={handleArrayChange(setTags)}
              size={tags.length}
              placeholder="An additional category"
              maxLength={20}
            />
          </BodyInputWrapper>
        </Col>
      </Row>
      <Row>
        <ButtonWrapper>
          <CallToAction onClick={onSubmit}>Create post</CallToAction>
        </ButtonWrapper>
      </Row>
    </Container>
  );
};

export default PostForm;

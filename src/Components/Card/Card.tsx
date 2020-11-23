import React, { useContext } from "react";
import {
  CardWrapper,
  Title,
  Icon,
  Subtitle,
  Footer,
  Divider,
  FooterText,
} from "./Card.components";
import { PartialPost } from "../../common/types";
import { SocketCtx } from "../../App";
import { CallToAction } from "../Button/Button.components";
import { UserContext } from "../../hooks/UserContext";

interface CardProps {
  data: PartialPost;
}
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna nisl, suscipit eget orci fermentum, venenatis ornare augue. Aliquam rutrum venenatis cursus.";

const Card = (props: CardProps) => {
  const {
    user_id,
    idea_description,
    post_author,
    long_text,
  } = props.data;
  const socket = useContext(SocketCtx);
  const user = useContext(UserContext);
  const onClick = () => {
    if (user?.user?.userId) {
      socket.emit('send-notification', { senderId: user.user.userId, userId: user_id, message: "Another user has liked your app!"})
    }
  };
  return (
    <CardWrapper>
      <Icon image="business"/>
      <Title>{idea_description || "Company name"}</Title>
      <Subtitle>{long_text || text}</Subtitle>
      <Divider />
      <Footer>
        <FooterText>More posts from {post_author || "this author"}</FooterText>
      </Footer>
      {user?.user?.userId !== user_id && (
        <CallToAction onClick={onClick}>I'm interested</CallToAction>
      )}
    </CardWrapper>
  );
};

export default Card;

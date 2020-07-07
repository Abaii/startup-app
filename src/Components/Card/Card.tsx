import React from 'react';
import {
  CardWrapper, Title, Icon, Subtitle, Footer, Divider, FooterText,
} from './Card.components';

interface CardProps {
    title?: string;
    description?: string;
}
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna nisl, suscipit eget orci fermentum, venenatis ornare augue. Aliquam rutrum venenatis cursus.';

const Card = (props: CardProps) => {
  const { title, description } = props;
  return (
    <CardWrapper>
      <Icon />
      <Title>{title || 'Company name'}</Title>
      <Subtitle>{ description || text}</Subtitle>
      <Divider />
      <Footer>
        <FooterText>Go to company</FooterText>
      </Footer>
    </CardWrapper>
  );
};

export default Card;

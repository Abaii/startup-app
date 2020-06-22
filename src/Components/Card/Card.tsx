import React from 'react';
import { CardWrapper, Title, Icon, Subtitle, Footer, Divider } from './Card.components';

const Card = () => {
    return (
        <CardWrapper>
            <Icon/>
            <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna nisl, suscipit eget orci fermentum, venenatis ornare augue. Aliquam rutrum venenatis cursus. </Title>
            <Subtitle>This is the sub title</Subtitle>
            <Divider/>
            <Footer>

            </Footer>
        </CardWrapper>
    )
};

export default Card;
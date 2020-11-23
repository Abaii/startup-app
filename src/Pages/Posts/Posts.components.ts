import styled from 'styled-components';
import { tokens } from '../../assets/tokens';

export const PostsTitle = styled.h2`
  margin: 30px auto;
  font-size: 52px;
  font-weight: bold;
  color: ${tokens.color.tertiaryColor};
`;

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 100px 0 50px 0;
`;

export const PostsSubtitle = styled.h3`
  font-size: 24px;
  color: ${tokens.color.secondaryColor};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0;
`;

export const NoPosts = styled.span`
  font-size: 24px;
  color: ${tokens.color.secondaryColor};
  margin: 0 auto;
`;

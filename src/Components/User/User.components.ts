import styled, { css } from 'styled-components';

export const UsernameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  flex-direction: column;
`;
export const UsernameHeader = styled.h1`
  font-size: 4.5vw;
  font-weight: 700;
  line-height: 1.6;
`;
export const UsernameSubtext = styled.h6`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.2;
  text-align: center;
`;

const BottomAligned = css`
  display: flex;
  flex-direction: column-reverse;
  min-height: 28vh;
  margin-bottom: 2vh;
`;

export const BottomRightAligned = styled.div`
  ${BottomAligned};
  text-align: right;
`;

export const BottomLeftAligned = styled.div`
  ${BottomAligned};
`;

export const SubHeader = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
`;

export const ProfileBannerWrapper = styled.div`
  min-height: 30vh;
  border-bottom: 4px #18a097 solid;
  width: 100%;
  margin-bottom: 10vh;
`;

import styled from "styled-components";
import {
  headingStyles,
  descriptionStyles,
  iconImageStyles,
  iconTextStyles,
} from "../SharedStyles";

export const HeadingContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const DescriptionText = styled.span`
  ${descriptionStyles};
`;

export const DescriptionInput = styled.textarea`
  ${descriptionStyles};
  border: 1px solid #e1e1e1;
  padding: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  min-width: 100%;
`;

export const HeadingText = styled.h2`
  ${headingStyles};
`;

export const HeaderInput = styled.input`
  ${headingStyles};
  border: none;
  border-bottom: 1px solid black;
  min-width: 200px;
  margin-left: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  min-width: 100%;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
`;

export const ActiveCategoryWrapper = styled.div`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: column;
  background-color: #d1e0e0;
  align-items: center;
  padding-bottom: 15px;
`;

export const CategoryText = styled.span`
  ${iconTextStyles};
`;

export const CategoryIcon = styled.img`
  ${iconImageStyles};
`;

export const InactivePronounText = styled.span`
  ${headingStyles};
  color: #a3a3a3;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ActivePronounText = styled.span`
  ${headingStyles};
  padding-left: 5px;
  padding-right: 5px;
`;

export const PronounWrapper = styled.span`
  padding-left: 10px;
  padding-right: 10px;
`;

import React from "react";
import {
  CategoriesWrapper,
  CategoryText,
  CategoryIcon,
  CategoryWrapper,
  ActiveCategoryWrapper,
} from "./PostForm.components";
import { Col } from "react-bootstrap";

export interface CategoryProperties {
  name: string;
  image: string;
}

interface PostCategorySelectorConfig {
  [key: string]: CategoryProperties;
}

interface PostCategorySelectorProps {
  config: PostCategorySelectorConfig;
  submitFunction: (newState: string, stateToChange: string) => void;
  activeCategory: string;
}

export const PostCategorySelector = (props: PostCategorySelectorProps) => {
  const { submitFunction, config, activeCategory } = props;
  const categories = Object.keys(config);

  const onClick = (categoryValue: string) => {
    submitFunction(categoryValue, "category");
  };
  return (
    <CategoriesWrapper>
      {categories.map((categoryKey) => (
        <Col onClick={() => onClick(categoryKey)}>
          {activeCategory === categoryKey ? (
            <ActiveCategoryWrapper>
              <CategoryIcon src={config[categoryKey].image} alt={categoryKey} />
              <CategoryText>{config[categoryKey].name}</CategoryText>
            </ActiveCategoryWrapper>
          ) : (
            <CategoryWrapper>
              <CategoryIcon src={config[categoryKey].image} alt={categoryKey} />
              <CategoryText>{config[categoryKey].name}</CategoryText>
            </CategoryWrapper>
          )}
        </Col>
      ))}
    </CategoriesWrapper>
  );
};

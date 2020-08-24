import React from "react";
import {
  CategoriesWrapper,
  CategoryText,
  CategoryIcon,
  CategoryWrapper,
  ActiveCategoryWrapper,
} from "./PostForm.components";
import { Col, Row } from "react-bootstrap";

export interface CategoryProperties {
  name: string;
  image: string;
}

interface PostCategorySelectorConfig {
  [key: string]: CategoryProperties;
}

interface PostCategorySelectorProps {
  config: PostCategorySelectorConfig;
  submitFunction: React.Dispatch<React.SetStateAction<string>>;
  activeCategory: string;
}

export const PostCategorySelector = (props: PostCategorySelectorProps) => {
  const { submitFunction, config, activeCategory } = props;
  const categories = Object.keys(config);

  const onSubmit = (category: string) => {
    submitFunction(category);
  };
  return (
    <CategoriesWrapper>
      {categories.map((categoryKey) => (
        <Col onClick={() => onSubmit(categoryKey)}>
          {activeCategory == categoryKey ? (
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

import React, { useState } from "react";
import { SearchbarWrapper, SearchContainer } from "./Search.components";
import { Input } from "../Input/Input";
import { CallToAction as Button } from "../Button/Button.components";
import { Posts } from "../../common/types";
import { searchPosts } from "../../common/requests";

interface SearchbarProps {
  handleResults: React.Dispatch<
    React.SetStateAction<
      | Pick<
          Posts,
          | "user_id"
          | "idea_description"
          | "post_author"
          | "long_text"
          | "category"
        >[]
      | undefined
    >
  >;
}

const Searchbar = (props: SearchbarProps) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) =>
    searchPosts(props.handleResults, search);
  const handleInput = (value: string) => {
    setSearch(value);
  };
  return (
    <SearchContainer>
      <SearchbarWrapper>
        <Input
          id="search"
          name="posts"
          type="text"
          inputHandler={(name: string, value: string) => handleInput(value)}
          placeholder="Enter keywords, e.g name of company"
        />
        <Button onClick={handleSearch}>Find a project</Button>
      </SearchbarWrapper>
    </SearchContainer>
  );
};

export default Searchbar;

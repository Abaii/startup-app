import React, { useState } from 'react';
import { SearchbarWrapper, SearchContainer } from './Search.components';
import { Input } from '../Input/Input';
import { CallToAction as Button } from '../Button/Button.components';


const Searchbar = () => {
  const [search, setSearch] = useState('');
  const handleInput = (value: string) => {
    setSearch(value);
  };
  return (
    <SearchContainer>
      <SearchbarWrapper>
        <Input id="search" name="posts" type="text" inputHandler={(value: string) => handleInput(value)} placeholder="Enter keywords, e.g name of company" />
        <Button>Find a project</Button>
      </SearchbarWrapper>
    </SearchContainer>
  );
};

export default Searchbar;

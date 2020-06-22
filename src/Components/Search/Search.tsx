import React, { useState } from 'react';
import { SearchbarWrapper, SearchInput, SearchContainer } from './Search.components';
import { Input } from '../Input/Input';
import { CallToAction as Button } from '../Button/Button.components';


const Searchbar = () => {
    const [search, setSearch] = useState('');
    const handleInput = (name: string, value: string) => {
        setSearch(value);
    }
    return (
        <SearchContainer>
            <SearchbarWrapper>
                <Input id="search" name="posts" type="text" inputHandler={handleInput} placeholder="Search for your product"/>
                <Button clear>Search!</Button>
            </SearchbarWrapper>
        </SearchContainer>
    )
};

export default Searchbar;
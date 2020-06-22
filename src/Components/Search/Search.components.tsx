import styled from 'styled-components';

export const SearchContainer = styled.div`
    width: 50%;
`
export const SearchbarWrapper = styled.div`
    display: flex; 
    justify-content: space-between;
    box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.25);
`;

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    &:focus{
        color: blue;
    }
`


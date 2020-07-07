import styled from 'styled-components';

export const SearchContainer = styled.div`
    width: 50%;
`;

export const SearchbarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    &:focus {
        color: blue;
    }
`


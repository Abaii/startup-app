import styled from 'styled-components';

export const InputWrapper = styled.div`
    position: relative;
    margin: 20px 0;
    padding: 5px;
    box-shadow: inset rgba(108,108,155,0.5) 0 -2px 0 0;
    &:focus{
        background-color: black;
    }
    label { 
        position: absolute;
        top: 0;
        bottom: 0;
        left: 10px;
        width: 100%;
        transition: 0.2s;
        color: grey;
        text-transform: capitalize;
        font-size: 1.5rem;
    }

    input { 
        border-width: 0;
        background-color: #fff;
        font-size: 1.5em;
        margin-bottom: 2px;
        z-index: 1;
    }

    input:focus {
        outline: 0;
    }

    input:focus + label, input:valid + label {
        bottom: 100%;
        left: 10px;
        margin-top: -16px;
        font-size: 1rem;
       
    }

    input:valid{
        background: white;
    }
`;
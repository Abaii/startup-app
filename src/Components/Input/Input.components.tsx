import styled from 'styled-components';

export const InputWrapper = styled.div`
    position: relative;
    margin: 20px 0;
    padding: 5px;
    box-shadow: inset rgba(108,108,155,0.5) 0 -2px 0 0;
    label { 
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: 0.2s;
        color: grey;
        text-transform: capitalize;
        font-size: 1.5rem;
        padding-top: 10px;
    }

    input { 
        border-width: 0;
        font-size: 1.5em;
        margin-bottom: 2px;
        z-index: 1;
    }

    input:focus {
        outline: 0;
    }

    input:focus + label, input:valid + label {
        bottom: 100%;
        margin-top: -16px;
        padding:0;
        font-size: 1rem;
    }

    input:valid{
        background: white;
    }
`;
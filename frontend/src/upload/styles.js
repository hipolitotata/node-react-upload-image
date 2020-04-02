import styled, { css } from 'styled-components';

const isDragActive = css`
    border: 4px dashed #75c251;
    color: #75c251;
`;
    
const isDragReject = css`
    border: 4px dashed #a31f35;
    color: #a31f35;
`;

export const Upload = styled.div`
    width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 35px 5px;
    background-color: white;
`;

export const DivUpload = styled.div`
    border: 4px dashed #dbdbdb;
    color: #dbdbdb;
    font-weight: 800;
    border-radius: 3px;
    width: 80%;
    height: 50%;
    padding: 20px 0px;
    text-align: center;
    cursor: pointer;

    input{
        width: 100%;
        height: 100%;
    }

    ${props => props.isDragReject && isDragReject}
    ${props => props.isDragActive && isDragActive}

`;
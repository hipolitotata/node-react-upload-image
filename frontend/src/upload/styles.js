import styled, { css } from 'styled-components';

const isDragActive = css`
    border: 4px dashed #75c251;
    color: #75c251;
`;
    
const isDragReject = css`
    border: 4px dashed #323232;
    color: #a31f35;
`;

export const Upload = styled.div`
    width: 600px;
    height: auto;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 35px 5px;
    background-color: white;
    padding: 0 0 30px;
`;

export const DivUpload = styled.div`
    border: 4px dashed #dbdbdb;
    color: #dbdbdb;
    font-weight: 800;
    border-radius: 3px;
    width: 80%;
    height: 100px;
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

export const DivImage = styled.div`
    width: 100%;
    max-height: 900px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 0 0 50px;
    margin: 5px 0 20px;
`;

export const ItemImage = styled.div`
    width: 350px;
    display: flex;
    flex-direction: row;
    padding: 0 0 0 15px;
    margin: 20px 0px;

    img.img{
        width: 45px;
        height: 40px;
        border-radius:3px;
    }
`;

export const InfoImage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 10px;
`;

export const NameImage = styled.p`
    font-size: 14px;
    color: #636363;
`;

export const SizeImage = styled.p`
    font-size: 12px;
    color: #adadad;
    margin-top: 7px;

    span{
        color: #851b1b;
        margin-left: 5px;
        cursor: pointer;
    }
`;
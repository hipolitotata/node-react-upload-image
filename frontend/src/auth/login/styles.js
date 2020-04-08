import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    height: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 35px 5px;
    background-color: white;
    padding: 0 0 30px;
`;

export const Title = styled.p`
    font-size: 22px;
    margin: 0 auto;
    font-weight: 800;
    margin: 20px 0 10px 0;
`;

export const Text = styled.p`
    font-size: 14px;
    margin: 0 auto;
    font-weight: 300;
    color: #bababa;
    margin: 0 0 20px 0;
    width: 220px;
    line-height: 1.2;
    text-align: center;
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px 0;
`;

export const TextInput = styled.text`
    font-size: 16px;
    color: #222;
`;

export const Field = styled.input`
    width: 300px;       
    border: none;
    background: #efefef;
    padding: 12px;
    border-radius: 3px;
    font-size: 16px;
`;

export const Button = styled.button`
    margin: 10px 0;
    width: 300px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: #fff;
    border: 1px solid #323232;
    background: #323232;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;

    &:hover{
        background: transparent;
        color: #000;
        transition: .3s;
    }
`;
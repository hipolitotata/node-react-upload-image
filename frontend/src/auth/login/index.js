import React, { useState } from 'react';
import {
    Container,
    Title,
    Text,
    Input,
    TextInput,
    Field,
    Button
} from './styles';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Login() {

    const [user, setUser] = useState({});

    const history = useHistory();

    function setInput(target) {
        let { value, name } = target;

        setUser({
            ...user,
            [name]: value
        });
    };

    async function onSubmit() {
        if (!user.email) return alert("Preencha o campo de e-mail");
        if (!user.password) return alert("Preencha o campo de senha");

        try {
            const response = await api.post('/auth/login', user);
            localStorage.setItem("x-access-token", response.data.token);
            history.push('/upload');
        } catch (err) {
            console.log(err, err.response)
        }
    };

    return (
        <Container>

            <Title>
                Uploads OSLR
            </Title>

            <Text>
                Envie suas imagens de forma fácil e rápido, com custo de 0%
            </Text>

            <Input>
                <TextInput>E-mail</TextInput>
                <Field
                    onChange={(e) => setInput(e.target)}
                    name="email"
                    type="text"
                    placeholder="Informe seu e-mail" />
            </Input>

            <Input>
                <TextInput>Senha</TextInput>
                <Field
                    onChange={(e) => setInput(e.target)}
                    name="password"
                    type="password"
                    placeholder="Digite sua senha" />
            </Input>

            <Button onClick={onSubmit}>
                Entrar
            </Button>

        </Container>
    );
}

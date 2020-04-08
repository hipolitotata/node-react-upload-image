import React from 'react';
import {
    Container,
    Title,
    Text,
    Input,
    TextInput,
    Field,
    Button
} from './styles';

export default function login() {
    return (
        <Container>

            <Title>
                Uploads OSLR
            </Title>

            <Text>
                Envie suas imagens de forma fácil e rápido, com custo de 0%
            </Text>

            <Input>
                <TextInput>Usuário</TextInput>
                <Field
                    placeholder="Informe seu usuário" />
            </Input>

            <Input>
                <TextInput>Senha</TextInput>
                <Field
                    placeholder="Digite sua senha" />
            </Input>

            <Button>
                Entrar
            </Button>

        </Container>
    );
}

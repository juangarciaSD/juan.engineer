import React from "react";
import styled from "styled-components";

const Login = () => {
    return(
        <MainContainer>
        <LoginContainer>
            <LoginTitle>Login</LoginTitle>
            <InputContainer>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
            </InputContainer>
            <Button>Login</Button>
        </LoginContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    justify-content: center;
    width: 100%;
    height: 100vh;
    text-align: center;
`;

const LoginContainer = styled.div`
    justify-content: center;
    width: 100%;
    max-width: 450px;
    margin: auto;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginTitle = styled.h1`
    padding: 18px 0px;
    margin: 0;
    color: var(--text);
`;

const Input = styled.input`
    font-size: 14px;
    border: 2px solid #e1e7f5;
    border-radius: 5px;
    padding: 5px;
    padding-left: 8px;
    margin-bottom: 8px;

    transition: 200ms ease-in-out all;

    outline: none;

    &:focus {
        border-color: var(--border);
    }
`;

const Button = styled.button`
    font-size: 18px;
    border: 0;    
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
    background-color: #3854FC;
    cursor: pointer;
    transition: 200ms ease-in-out all;

    &:hover {
        opacity: 0.7;
    }
`;

export default Login;
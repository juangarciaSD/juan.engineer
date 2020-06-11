import styled from 'styled-components'
import UIProps from './ui.interface'

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("../assets/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(8px);
    background-position: 50%;
    transform: scale(1.5);

    @media only screen and (max-width: 600px) {
        transform: scale(auto)
    }
`

export const Container = styled.div`
    width: 350px;
    position: fixed;
    text-align: center;
    justify-content: center;
    align-content: center;
    border-radius: 15px;
    padding: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
`

export const Name = styled.h1`
    padding: 5px 0px;
    margin: 0px auto;
    color: #fff;
    font-size: 4vh;
`

export const Position = styled.h4<UIProps>`
    padding: 5px 0px;
    margin: 0px auto;
    color: #fff;
    font-size: 2vh;
    font-weight ${props => props.fontWeight};
`

export const Social = styled.div`
    margin-top: 15px;
    padding: 5px 10px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
`

export const SocialIcon = styled.div`
    width: 25px;
    height: 25px;
    color: #fff;
    fill: #fff;
    transition: fill 1s ease-in-out;

    .twitter-icon:hover {
        fill: #1ea1f2;
    }

    .github-icon:hover {
        fill: #24292e;
    }

    .fa-discord:hover {
        fill: #7289da;
    }

    .linkedin-icon:hover {
        fill: #0e76a8;
    }

    .notify-icon:hover {
        fill: #25b0ed;
    }
`

//upload service
export const GetFile = styled.button`
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    color: #fff;
    background-color: transparent;
    border: 1px solid #25b0ed;
    border-radius: 10px;
    transition: 200ms ease-in-out;
    outline: none;
    margin-bottom: 15px;

    :hover {
        cursor: pointer;
        background-color: #25b0ed;
    }
`

export const Uploader = styled.progress<UIProps>`
    appearance: none;
    width: 100%;
    display: ${props => props.display ? "none": "block"};
`

export const Link = styled.a<UIProps>`
    text-decoration: none;
    color: #428df5;
    display: ${props => props.display ? "block" : "none"};

    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

//auth screen
export const ModalContainer = styled.div<UIProps>`
    width: 100vw;
    display: ${props => props.display ? 'none' : 'block'};
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.65);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const AuthContainer = styled.div`
    width: 350px;
    position: absolute;
    text-align: center;
    justify-content: center;
    background-color: #121212;
    align-content: center;
    border-radius: 15px;
    padding: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const InputBox = styled.div`
    width: 100%;
    position: absolute;
    text-align: center;
    justify-content: center;
    align-content: center;
    background-color: #121212;
    border-radius: 15px;
    padding: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Input = styled.input`
    width: 100%;
    display: block;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    box-sizing: border-box;
    letter-spacing: .25px;
    padding: 15px;
    color: #fff;
    margin: 15px 0;
    background-color: #242424;
    border: 3px solid #242424;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
`

export const AuthButton = styled.button<UIProps>`
    width: 50%;
    display: block;
    margin: 0 auto;
    padding: 10px;
    color: #fff;
    font-size: 15px;
    background-color: transparent;
    border: 1px solid #25b0ed;
    border-radius: 10px;
    transition: 250ms ease-in-out;
    margin-left: ${props => props.marginL || "0px"};
    margin-right: ${props => props.marginR || "0px"};

    :hover {
        cursor: pointer;
        background-color: #25b0ed;
    }
`
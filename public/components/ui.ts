import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/tech-me-main.appspot.com/o/me-background.png?alt=media&token=0428b951-9f66-4f6e-b4cf-35a6a2f16d57");
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(8px);
    background-position: 50%;
    transform: scale(1.5);
`

export const Container = styled.div`
    width: 350px;
    position: absolute;
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

export const Position = styled.h4`
    padding: 5px 0px;
    margin: 0px auto;
    color: #fff;
    font-size: 2vh;
`

export const Social = styled.div`
    margin-top: 15px;
    padding: 0px 10px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
`

export const SocialIcon = styled.div`
    width: 25px;
    height: 25px;
    color: #fff;
    padding: 10px;
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
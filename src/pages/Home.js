import styled from "styled-components";
import imgURL from "../images/home.png";
import baseFont from "../fonts/work-sans.ttf";
import titleFont from "../fonts/eczar.ttf";
import svgURL from "../images/arrow.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const Navigate = useNavigate();
    const HomeBox = styled.div`
        width: 800px;
        background-color: transparent;
        text-align: left;
        display: flex;
        align-items: center;
    `;
    const Left = styled.div`
        width: 60%;
        float: left;
        padding-left: 10px;
        @media (max-width: 570px) {
            width: 100%;
            padding: 0px 20px;
        }
        `;
    const Right = styled.div`
        width: 40%;
        float: right;
        @media (max-width: 570px) {
            display: none;
        }
    `;
    const BtnWrapper = styled.div`
        display: flex;
        justify-content: start;
        align-items: center;
    `;
    return (
        <HomeBox>
            <Left>
                <HelloBtn />
                <Title />
                <BtnWrapper>
                    <ProjectsBtn clickHandler={ () => { Navigate('/projects') }} />
                    <ContactBtn clickHandler={ () => { Navigate('/contact') } } />
                </BtnWrapper>
            </Left>
            <Right>
                <Cartoon />
            </Right>
        </HomeBox>
    );
}

const HelloBtn = () => {
    const StyledHelloBtn = styled.button`
        @font-face {
            font-family: 'Work Sans';
            src: url(${baseFont});
        }
        font-family: 'Work Sans';
        padding: 10px 10px;
        background-color: rgb(0,0,0, 0.3);
        color: white;
        border-style: none;
        border-radius: 6px;
        cursor: pointer;
        :hover {
            background-color: rgb(20,20,20);
        }
    `;
    return (
        <StyledHelloBtn>&#128075; Bem-vindo(a)!</StyledHelloBtn>
    );
}

const Title = () => {
    const StyledTitle = styled.h1`
        @font-face {
            font-family: 'Eczar';
            src: url(${titleFont});
        }
        font-family: 'Eczar';
        font-size: 2rem;
        color: #fff;
        line-height: 2.5rem;
        letter-spacing: 1px;
        margin: 20px 0px;
        @media (max-width: 700px) {
            font-size: 1.8rem;
            line-height: 2rem;
            margin: 15px 0px;
        }
    `;
    return (
        <StyledTitle>Olá, meu nome é João. Sou Desenvolvedor Front-End e Graduando em Análise e Desenvolvimento de Sistemas.</StyledTitle>
    );
}

const ProjectsBtn = ( { clickHandler } ) => {
    const StyledProjectsBtn = styled.button`
        @font-face {
            font-family: 'Work Sans';
            src: url(${baseFont});
        }
        height: 40px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Work Sans';
        font-weight: bold;
        letter-spacing: 1px;
        background-color: #4E5E80;
        color: white;
        border-style: none;
        border-radius: 6px;
        cursor: pointer;
        margin-right: 10px;
        :hover {
            background-color: rgb(20,20,20);
        }
    `;
    return (
        <StyledProjectsBtn onClick={ () => clickHandler() }>
            Ver Projetos 
            <img src={svgURL} alt="svg arrow" style={{'marginLeft': '5px'}}></img>
        </StyledProjectsBtn>
    );
}

const ContactBtn = ( { clickHandler } ) => {
    const StyledContactBtn = styled.button`
        @font-face {
            font-family: 'Work Sans';
            src: url(${baseFont});
        }
        height: 40px;
        width: 110px;
        font-family: 'Work Sans';
        font-weight: bold;
        letter-spacing: 1px;
        background-color: transparent;
        border: solid 2px #4E5E80;
        border-radius: 6px;
        color: #4E5E80;
        cursor: pointer;
        :hover {
            border-color: rgb(20,20,20);
            color: rgb(20,20,20);
        }
    `;
    return (
        <StyledContactBtn onClick={ () => clickHandler() } >
            Fale Comigo
        </StyledContactBtn>
    );
}

const Cartoon = () => {
    const Image = styled.img`
        width: 100%;
        max-width: 300px;
    `;
    return (
        <Image src={ imgURL } />
    );
}

export default Home;
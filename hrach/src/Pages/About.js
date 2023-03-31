import styled from 'styled-components';
import {Link} from "react-router-dom";

const HomeWrapper = styled.div`
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //justify-items: center;
  //margin-top: 50px
`;


const StyledImg = styled.img`
    width: 300px;
    height: 160px;
    border-radius: 27px;
    `;


const StyledImgBig = styled.img`
    width: 600px;
    height: 300px;
    `;

const ImageWrapper = styled.a`
  text-decoration: none;
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
`

const Container = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  margin: 40px 100px;
`;

const Text1 = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: white; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
height: 20px`

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
    return <HomeWrapper>
        <Container>
                <ImageWrapper href="https://eua.am/en/" target="_blank">
                    <StyledImg src="un-logo.png"/>
                </ImageWrapper>
            <FlexWrap>
                <ImageWrapper href="https://eua.am/a-competition-titled-creating-an-armenian-branding-logo-was-held-at-eua/" target="_blank">
                <StyledImgBig src="about1.png"/>
                </ImageWrapper>
            </FlexWrap>

        </Container>
        <Container>
            <ImageWrapper href='https://eua.am/a-competition-titled-creating-an-armenian-branding-logo-was-held-at-eua/' target="_blank">

            <StyledImgBig src="about4.png"/>
            </ImageWrapper>
            <ImageWrapper href='https://eua.am/a-vacant-position-of-the-chair-of-economics-and-business/' target="_blank">
            <StyledImgBig src="about3.png"/>
            </ImageWrapper>
        </Container>
    </HomeWrapper>

};

export default Home;

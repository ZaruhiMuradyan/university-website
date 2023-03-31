import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom";

const HomeWrapper = styled.div`
display: flex;
row-gap: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000000;
`;

const FirstCol = styled.div`
  display: flex;
  width: 35%;
  background-color: #7285ff;
  height: 100%;
  flex-direction: column;
  padding: 50px;
  justify-content: space-around;
  align-content: center;
  color: white;
`;

const SecondCol = styled.div`
  display: flex;
  width: 65%;
  background-color: #b4bdff;
  height: 100%;
  flex-direction: column;
  padding: 60px;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;


const SocialMedia = styled.div`
  display: flex;
  column-gap: 40px;
  align-items: center;
  align-content: center;
  justify-content: center;
  
`;

const Welcome = styled.div`
  font-size: 40px;
  font-weight: 700;
  font-style: italic;
`;

const Connected = styled.div`
  font-size: 20px;
  font-style: italic;
`;


const SignInButton = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  padding: 10px;
  background-color: inherit;
  border: 1px solid white;
  border-radius: 30px;
  color: inherit;
  
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */`;

const StyledLiComponent = styled.div`
  && {
    :hover{
      opacity: 0.5;
    }
  }
`;

const CreateAccount = styled.div`
  font-size: 40px;
  font-weight: 700;
`;


const SocialMediaWrapper = styled.div`
display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
    width: 60px;
    height: 60px;
    `;

const ImageWrapper = styled.a`
  text-decoration: none;
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Input = styled.input`
  padding:  20px 400px 20px 5px;
  font-size: 20px;
`;

const Home = () => {
    return <HomeWrapper>
<FirstCol>
    <Welcome>
        Welcome Back!
    </Welcome>
    <Connected>
        To keep connected with us please log in with your personal info
    </Connected>
    <StyledLiComponent>
        <StyledLink to="/">
            <SignInButton>
                SIGN IN
            </SignInButton>
        </StyledLink>
    </StyledLiComponent>


</FirstCol>
        <SecondCol>
            <CreateAccount>
                Create Account
            </CreateAccount>
            <SocialMediaWrapper>
                <SocialMedia>
                <StyledLink to="https://www.facebook.com/European.University.ARM/" target='_blank'>
                    <StyledImg src="fb.png"/>
                </StyledLink>
                    <StyledLink to="https://eua.am/en/" target='_blank'>
                        <StyledImg src="g.png"/>
                    </StyledLink>
                <StyledLink to="https://www.instagram.com/european_university_of_armenia/" target='_blank'>
                    <StyledImg src="insta.png"/>
                </StyledLink>
                </SocialMedia>
                <Connected>
                    or use your email for registration
                </Connected>
            </SocialMediaWrapper>

            <InputWrapper>
                <Input type="text" placeholder="Name"/>
                <Input type="text" placeholder="Email"/>
                <Input type="text" placeholder="Password"/>
            </InputWrapper>
        </SecondCol>
    </HomeWrapper>

};

export default Home;

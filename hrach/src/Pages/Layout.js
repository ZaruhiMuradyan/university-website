import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  background-image: url("main-background.jpg");
  background-repeat: no-repeat;
  background-size:100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;
`;

const LeftSideRoutes = styled.ul`
  position: relative;
  list-style:none;
  padding: 0;
  display: flex;
  column-gap: 60px;
  color: wheat;
`;

const RightSideRoutes = styled.ul`
  position: relative;
  list-style:none;
  padding-right: 15px;
  display: flex;
  column-gap: 60px;
  color: wheat;
  width: inherit;
  justify-content: flex-end;
`;

const ContactInfoWrapper = styled.div`
  position: relative;
  padding-right: 20px;
  display: flex;
  column-gap: 60px;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white
`

const StyledNav = styled.nav`
  display: flex;
  width: inherit;
  height: max-content;
  justify-content: space-between;
  padding: 10px;
  padding-left: 15px;
  border-bottom: 2px solid white;
`;

const StyledNavRight= styled.nav`
  display: flex;
  width: auto;
  padding-top: 10px;
  padding-right: 15px;
  height: max-content;
  justify-content: flex-end;
`;

const EmailIcon = styled.img`
  z-index:10;
  color: white;
  width:   24px;
  height: 17px;
`

const PhoneIcon = styled.img`
  z-index:10;
  color: white;
  height:   24px;
  width: 17px;
`

const Info = styled.div`
  display: flex;
  column-gap: 9px;
  align-items: center;`


const StyledText = styled.p`
    font-size: 15px;
`

const ContactStyledText  = styled.p`
    font-size: 10px;
`

const SignOut  = styled.p`
    font-size: 20px;
  padding-left: 10px;
`

const Scrollable = styled.div`
  overflow: scroll;
`

const StyledLiComponent = styled.li`
  && {
    :hover{
      opacity: 0.5;
    }
  }
`;

const Layout = () => {
    return (
        <Scrollable>
        <div>
            <StyledNav>
                <LeftSideRoutes>
                    <StyledLiComponent>
                        <StyledLink to="/">Administration</StyledLink>
                    </StyledLiComponent>
                    <StyledLiComponent>
                        <StyledLink to="/student-life">Student life</StyledLink>
                    </StyledLiComponent>
                    <StyledLiComponent>
                        <StyledLink to="/international-department">International department</StyledLink>
                    </StyledLiComponent>
                    <StyledLiComponent>
                        <StyledLink to="/tuition-fees">Tuition fees</StyledLink>
                    </StyledLiComponent>
                </LeftSideRoutes>
                <ContactInfoWrapper>
                    <Info>
                        <EmailIcon src="email.png"/>
                        <ContactStyledText >contactus@gmail.com</ContactStyledText >
                    </Info>
                    <Info>
                        <PhoneIcon src="phone.png"/>
                        <ContactStyledText >+982 234 543 321
                        </ContactStyledText >
                        <StyledLink to="/sign-in">
                            <SignOut>Sign out</SignOut>
                        </StyledLink>
                    </Info>
                </ContactInfoWrapper>
            </StyledNav>
            <StyledNavRight>
                <RightSideRoutes>
                    <StyledLiComponent>
                        <StyledLink to="/about">About</StyledLink>
                    </StyledLiComponent>
                    <StyledLiComponent>
                        <StyledLink to="/students">Students</StyledLink>
                    </StyledLiComponent>
                    <StyledLiComponent>
                        <StyledLink to="/faculties">Faculties</StyledLink>
                    </StyledLiComponent>
                    <StyledLiComponent>
                        <StyledLink to="/department">Department</StyledLink>
                    </StyledLiComponent>
                    <StyledLiComponent>
                        <StyledLink to="/apply-now">Apply now</StyledLink>
                    </StyledLiComponent>
                </RightSideRoutes>
            </StyledNavRight>
        </div>
            <Outlet/>
        </Scrollable>
    )
};

export default Layout;
import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  background-image: url("main-background.jpg");
  background-repeat: no-repeat;
  background-size:100%;
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
`;

const LeftSideRoutes = styled.ul`
  list-style:none;
  display: flex;
  column-gap: 60px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white
`

const StyledNav = styled.nav`
  display: flex;
  width: inherit;
  justify-content: space-between;
`;

const Layout = () => {
    return (
        <LayoutWrapper>
            <StyledNav>
                <LeftSideRoutes>
                    <li>
                        <StyledLink to="/">Administration</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/student-life">Student life</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/tuition-fees">Tuition fees</StyledLink>
                    </li>
                </LeftSideRoutes>
                <LeftSideRoutes>
                    <li>
                        <img src="Group"
                        contactus@gmail.com

                    </li>
                    <li>
                        phone
                    </li>
                </LeftSideRoutes>
            </StyledNav>
            <Outlet />
        </LayoutWrapper>
    )
};

export default Layout;
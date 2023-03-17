import styled from 'styled-components';
import {Link} from "react-router-dom";

const HomeWrapper = styled.div`
  width: inherit;
  height: auto;
  display: flex;
  //justify-content: center;
  //justify-items: center;
  //margin-top: 50px
`;


const StyledParskakanImg = styled.img`
    width: 80px;
    height: 80px`;


const White = styled.div`
  background-color: darkgrey;
  position: relative;
  display: flex;
  width: 50%;
  height: 500px;
`

const Text = styled.div`
  color: white;
`

const Home = () => {
    return <HomeWrapper>
        <White>
            <StyledParskakanImg src="university.png"/>
            <StyledParskakanImg src="logo.png"/>
        </White>
    </HomeWrapper>

};

export default Home;

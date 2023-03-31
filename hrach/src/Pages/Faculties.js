import styled from "styled-components";
import {Link} from "react-router-dom";


const Wrapppper = styled.div`
  display: flex;
`;


const FacultesWrapper = styled.div`
  display: flex;
  position: relative;
  width: 70%;
  margin-top: 60px;
  align-items: self-start;
  justify-items: center;
  justify-content: center;
  column-gap: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  margin-left: 30px;
  color: white;
`;

const Cube = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  width: 180px;
  height: 180px;
  background-color: white;
  color: black;
  border-radius: 3px;
  padding: 10px;
`;

const CubeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  color: white;
`;

const JoinNow = styled.div`
  font-size: 10px;
color: #ff0000;
`;
const Text = styled.div`
  font-size: 15px;
  font-family: "ms reference sans serif",sans-serif;
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white
`

const Faculties = () => {
    return <Wrapppper>
        <Title> Our Faculties</Title>

    <FacultesWrapper>
        <CubeWrapper>
            <Cube>
                <Text> Information technologies </Text>
                <JoinNow> Join now</JoinNow>
                </Cube>
            <div>
                Information technology is the use of computers to create, process, store, retrieve and exchange all kinds
                of data and information. IT forms part of information and communications technology.
            </div>

        </CubeWrapper>

        <CubeWrapper>
            <Cube>
                <Text>Linguistics</Text>
                <StyledLink to="/apply-now">
                    <StyledLink to="/apply-now">
                <JoinNow> Join now</JoinNow>
                    </StyledLink>
                </StyledLink>
            </Cube>
            <div>
                Linguistics is the scientific study of language, and its focus is the systematic investigation of the
                properties of particular languages as well as the characteristics of language in general.
            </div>

        </CubeWrapper>
        <CubeWrapper>
            <Cube>
                <Text>Psychology</Text>
                <StyledLink to="/apply-now">
                <JoinNow> Join now</JoinNow>
                </StyledLink>
            </Cube>
            Psychology is the scientific study of the mind and behavior. Psychologists are actively involved in
            studying and understanding mental processes, brain functions, and behavior.
        </CubeWrapper>
        <CubeWrapper>
            <Cube>
                <Text>Robotics</Text>
                <StyledLink to="/apply-now">
                <JoinNow> Join now</JoinNow>
                </StyledLink>
                </Cube>
            A robotics engineering degree program teaches you how to design and build robots. In your courses,
            you&#39;ll learn about mechanical and electrical engineering, chemistry, computer science, and physics.
        </CubeWrapper>
        <CubeWrapper>
            <Cube>
                <Text>Graphics Design</Text>
                <StyledLink to="/apply-now">
                    <JoinNow> Join now</JoinNow>
                </StyledLink>                </Cube>
            Graphic design is a craft where professionals create visual content to communicate messages. By
            applying visual hierarchy and page layout techniques, designers use typography and pictures to meet
            users.
        </CubeWrapper>
    </FacultesWrapper>
    </Wrapppper>
};

export default Faculties;
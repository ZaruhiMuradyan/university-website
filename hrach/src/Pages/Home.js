import styled from 'styled-components';
import {Link} from "react-router-dom";

const HomeWrapper = styled.div`
  width: inherit;
  height: auto;
  display: flex;
  justify-content: center;
  justify-items: center;
  margin-top: 50px
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
`;


const Text = styled.div`
  color: white;
  font-size: 20px;
`;


const Text2 = styled.div`
  color: white;
  font-size: 30px;
`;


const TextTitle = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 700;
`;


const Text3 = styled.div`
  position: relative;
  width: 301px;
  height: 139px;
  font-family: "segoe ui";
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  margin-top: 10px;

`;

const SerKubik = styled.div`
  font-size: 20px;
  color: #ffffff;
`;

const RubikKubik = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 250px;
  height: 250px;
  color: white;
  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  background: #292f51;
  margin: 5px;
  padding: 10px;
`

const RubikKubikBac = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  background: #adadad;
  margin: 5px;
  padding: 0 30px;
  justify-content: space-between;
`

const Gazaraguyn = styled.div`
  position: relative;
  width: 632px;
  height: 249px;
  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  background: #e0b264;
  margin: 5px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const Tapancik = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  margin: 5px
`

const PositionAbsolute = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  left: 100px;
  width: 500px;
  height: 250px;
  margin: 5px
`

const GazarWrapper = styled.div`
  margin: 50px 80px;
`;

const TextWithBorder = styled.div`
  color: white;
  font-size: 20px;
  width: fit-content;
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid white;
`

const Divider = styled.div`
  border-top: 1px solid white;
  width: 30%;
`;

const TextRight = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row-reverse;
`

const ApplyButton = styled.div`
  color: white;
  width: max-content;
  padding:10px 60px;
  border: 1px solid white;
  margin: 10px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Description = styled.div`
  font-size: 14px;
`

const Home = () => {
    return <>

        <PositionAbsolute>
            <div>
                <Text>IN PURSUIT OF</Text>
            </div>
            <div><Text2>Ethics & Excellence</Text2></div>
            <Text3>
                There is no passion to be found in playing small,
                in settling for a life that is less than the one you are
                capable of living. —Nelson Mandela

            </Text3>
        </PositionAbsolute>

        <HomeWrapper>
        <ColumnWrapper>
            <RowWrapper>
                <Tapancik/>
            </RowWrapper>
            <RowWrapper>

<ColumnWrapper>
    <RubikKubik>
        <div>Jane</div>
        <br/>
        <Description>
            European university is a really friendly place to be, the staff are approachable and helpful. My student life rep is
            brilliant and has been supportive and really welcoming. There are lots of opportunities to be around
            animals and to new skills.
        </Description>
        <br/>
        <Divider/>
        <TextRight>
            Aug 13 2020
        </TextRight>
    </RubikKubik>
</ColumnWrapper>
                <ColumnWrapper>
                    <RubikKubik>
                        <div>Judy</div>
                        <br/>
                        <Description>
                            Really good lectures that are happy to give extra help and support if someone is confused with that
                            certain topic, they go over every assessment weekly and help to give you support if any is needed
                        </Description>
                        <br/>
                        <Divider/>
                        <TextRight>
                            Dec 24 2022
                        </TextRight>
                    </RubikKubik>
                </ColumnWrapper>
            </RowWrapper>
        </ColumnWrapper>
        <ColumnWrapper>
            <RowWrapper>
                <ColumnWrapper>
                    <RubikKubikBac>
                        <br/>
                        <TextTitle>15 SEP 2023</TextTitle>
                    <br/>
                        <SerKubik>
                            Electronic Engineering and Computer Science short term
                        </SerKubik>
                        <StyledLink to="/apply-now">
                            <ApplyButton>Apply</ApplyButton>
                        </StyledLink>
                    </RubikKubikBac>
                </ColumnWrapper>
                <ColumnWrapper>
                    <RubikKubikBac>
                        <br/>
                        <TextTitle>5 OCT 2023</TextTitle>
                        <br/>
                        <SerKubik>
                            Fundamentals of design
                            Graphics Design
                            short term
                        </SerKubik>
                        <StyledLink to="/apply-now">
                            <ApplyButton>Apply</ApplyButton>
                        </StyledLink>
                    </RubikKubikBac>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper>
                <Gazaraguyn>
                    <GazarWrapper>
                        <Text2>Become a student at the European University of Information Technologies</Text2>
                        <StyledLink to="/apply-now">
                        <TextWithBorder>Application admission</TextWithBorder>
                        </StyledLink>
                    </GazarWrapper>
                </Gazaraguyn>
            </RowWrapper>
        </ColumnWrapper>
    </HomeWrapper>
    </>
};

export default Home;

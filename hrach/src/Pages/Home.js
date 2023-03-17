import styled from 'styled-components';

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
  position: relative;
  width: 250px;
  height: 250px;
  color: white;
  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  background: #292f51;
  margin: 5px;
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
  margin: 5px
`

const Gazaraguyn = styled.div`
  position: relative;
  width: 510px;
  height: 250px;
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
  margin: 60px 100px
`;

const TextWithBorder = styled.div`
  color: white;
  font-size: 20px;
  width: fit-content;
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid white;
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
        There is no passion to be found in playing small, in settling for a life that is less than the one you are capable of living. —Nelson Mandela

    </RubikKubik>
</ColumnWrapper>
                <ColumnWrapper>
    <RubikKubik>
        There is no passion to be found in playing small, in settling for a life that is less than the one you are capable of living. —Nelson Mandela

    </RubikKubik>
</ColumnWrapper>
            </RowWrapper>
        </ColumnWrapper>
        <ColumnWrapper>
            <RowWrapper>
                <ColumnWrapper>
                    <RubikKubikBac>
                        <Text>5 OCT 2023</Text>

                        <SerKubik>
                            Electronic Engineering and Computer Science short term

                        </SerKubik>
                    </RubikKubikBac>
                </ColumnWrapper>
                <ColumnWrapper>
                    <RubikKubikBac>
                        <Text>5 OCT 2023</Text>
                        <SerKubik>
                            Fundamentals of design
                            Graphics Design
                            short term
                        </SerKubik>

                    </RubikKubikBac>
                </ColumnWrapper>
            </RowWrapper>
            <RowWrapper>
                <Gazaraguyn>
                    <GazarWrapper>
                        <Text>Become a student at the Harper University of Information Technologies</Text>
                        <TextWithBorder>Application admission</TextWithBorder>
                    </GazarWrapper>
                </Gazaraguyn>
            </RowWrapper>
        </ColumnWrapper>
    </HomeWrapper>
    </>
};

export default Home;

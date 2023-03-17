import styled from "styled-components";


const InternationalDepWrapper  = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  border-top: 2px solid yellow;
`;

const Colmuns = styled.div`
  color: white;
  font-size: 30px;
  flex-direction: column;
  align-content: center;
  max-width: 400px;
`;

const Text = styled.div`
  padding-bottom: 10px;
`;

const StyledImg = styled.img`
    width: 144px;
    height: 80px`;

const StyledParskakanImg = styled.img`
    width: 80px;
    height: 80px`;


const Centered = styled.div`
  padding-left: 30px;
`;

const Text1 = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
  width: 600px;
`
const ImageWrapper = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
`

const InternationalDep = () => {
    return <InternationalDepWrapper>
        <Colmuns>
            <Text>
                Our partners

            </Text>
            <div>
                <ImageWrapper href="https://www.fh-kufstein.ac.at/Berufsbegleitend-studieren?gclid=CjwKCAjwq-WgBhBMEiwAzKSH6Bv70QG7mc7Jk1w5dcyZGQUPnwyclJ0G86OZGOOSvWL2JFqTCxQQhhoCsbAQAvD_BwE" target="_blank">
                <StyledImg src="germanakan.png"/>
                </ImageWrapper>
            </div>
            <div>
                <ImageWrapper href="https://www.kolegija.lt/en/vilnius-business-college/" target="_blank">
                <StyledImg src="vilnius.png"/>
                </ImageWrapper>
            </div>
            <div>
                <ImageWrapper href="https://www.eklya.fr/en/accueil/" target="_blank">
                    <StyledImg src="111.png"/>
                </ImageWrapper>
            </div>
            <div>
                <ImageWrapper href="https://www.eurac.edu/en" target="_blank">
                <StyledImg src="21.png"/>
                </ImageWrapper>
            </div>
            <Centered>
                <ImageWrapper href="http://en.pnu.ac.ir/portal/home/" target="_blank">
                <StyledParskakanImg src="1200px-Payame_N.png"/>
                </ImageWrapper>
            </Centered>
        </Colmuns>
        <Colmuns>
            <Text>
                Scholarships
            </Text>
            <div>
                <Text1 href="https://scholarship.mastersportal.com/affordable-education-e/generic/?utm_source=google&amp;utm_medium=cpc&amp;utm_campaign=16085076918&amp;utm_content=137382885307&amp;utm_term=apply%20for%20student%20scholarships&amp;gclid=CjwKCAjwq-WgBhBMEiwAzKSH6MXjrN1ojKgAYo4la6AfMImqaHcxiTAimkN-J1_U5u5F40AYRQueSxoC-FYQAvD_BwE"  target="_blank">
                    Fellowship
                </Text1>
            </div>
            <div>
                <Text1 href="https://www.summerboardingcourses.com/"  target="_blank">
                    Summer/winter school
                </Text1>
            </div>
            <div>
                <Text1 href="https://education.ec.europa.eu/education-levels/higher-education/inclusive-and-connected-higher-education/mobility-and-cooperation" target="_blank">
                    Mobility
                </Text1>
            </div>
        </Colmuns>
        <Colmuns>
            <Text>
                Second diploma
            </Text>
            <div>
                <Text1 href="https://eua.am/a-new-double-degree-program-with-the-leading-european-research-center-eurac/"  target="_blank">
                    A new double diploma program with the leading European Research Center – EURAC
                </Text1>
            </div>
        </Colmuns>
    </InternationalDepWrapper>
};

export default InternationalDep;
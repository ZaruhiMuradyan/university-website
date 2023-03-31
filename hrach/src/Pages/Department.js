import styled from "styled-components";
import {Link} from "react-router-dom";


const Wrapppper = styled.div`
  display: flex;
  margin: 60px;
  flex-direction: column;
  row-gap: 40px;
`;

const Title = styled.div`
  font-size: 40px;
  color: white;
  font-weight: 500;
  
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

const ContactUs = styled.div`
  height: 50px;
  background-color: darkorange;
  font-size: 25px;
  padding: 20px;
  width: max-content;
  color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
`;

const CertifiedTeachers = styled.div`
  position: fixed;
  bottom: 0;
  width: 350px;
  height: 250px;
  background-color: darkorange;
  z-index: 10000000;
  display: flex;
  align-self: center;
  flex-direction: column;
  color: white;
  padding: 30px;
  font-size: 14px;
  align-content: center;
  justify-content: space-between;
`;

const Teachers = styled.div`
  font-size: 20px;
`;

const LinkTo = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
  width: 600px;
`

const Department = () => {
    return <Wrapppper>
        <Title> Our Department</Title>
        <LinkTo href="https://eua.am/adm_reg_eng/" target="_blank">
            <ContactUs>Contact us</ContactUs>
        </LinkTo>
        <CertifiedTeachers>
            <Teachers>
                Certified Teachers
            </Teachers>
            <div>
                Certified teachers provide instruction, observe and evaluate student performance. They create lesson plans, grade homework, administer tests, lead class discussions, maintain discipline and provide additional assistance as needed by students in order to guarantee academic success.
            </div>
            </CertifiedTeachers>
    </Wrapppper>
};

export default Department;
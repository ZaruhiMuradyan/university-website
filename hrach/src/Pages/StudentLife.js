import styled from "styled-components";


const StudentLifeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("am-yerevan.jpg");
  background-repeat: no-repeat;
  background-size:100%;
  position: relative;
  height: 600px;
  width: 100%;
  z-index: 10000;
`;

const TextWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  width: 50%;
`;

const Text = styled.div`
  color: white;
  font-style: italic;
  font-size: 40px;
`;


const StudentLife = () => {

    return <StudentLifeWrapper>
        <TextWrapper>
        <Text>It's not about perfect. It's about effort.
        </Text>
        <Text>I need to add some activities about students and about the city, Yerevan some pics
        </Text>
        </TextWrapper>
    </StudentLifeWrapper>
};

export default StudentLife;
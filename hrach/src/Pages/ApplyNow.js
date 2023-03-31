import styled from "styled-components";
import {useState} from "react";


const ApplyNowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
  row-gap: 50px;
  color: grey;
  align-items: center;
`;


const Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: white;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 30px;

  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  border-radius: 35px;
  padding-left: 20px;

  background: #ffffff
`;
const Apply = styled.button`
  width: 200px;
  height: 30px;

  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  border-radius: 35px;

  background: #ffffff
`;

const StyledInputLarge = styled.input`
  width: 300px;
  height: 30px;

  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  border-radius: 35px;
  padding-left: 20px;


  background: #ffffff
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;



const FlexColumn = styled.div`
  display: flex;
  column-gap: 40px;
  align-content: center;
  align-items: self-end;
`;


const GenderColumn = styled.div`
  display: flex;
  column-gap: 10px;
  align-content: center;
  align-items: self-end;
`;

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  align-content: center;
`;

const Centered = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  justify-self: center;
  margin: 30px;
`;

const Checkbox = styled.input`

`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-content: center;
  width: 300px;
`;

const  ThankYou = styled.div`
  font-size: 40px;
  color: white;
  align-self: center;
  align-content: center;
  justify-self: center;
  width: 1000px;
  
`

const ApplyNow = () => {
    const [submitted,setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        setSubmitted(true);
    };
    return <ApplyNowWrapper>
        <Title>COLLEGE ADDMISSIONS FORM</Title>
        {submitted ?
            <ThankYou>Your application has been successfully submitted! We will contact you shortly.</ThankYou>
        :
            <FormWrapper>
                <FlexColumn>
                    <FlexRow>
                        Name
                        <StyledInput id="text" type="text" />
                        First Name
                    </FlexRow>
                    <FlexRow>
                        <StyledInput id="text" type="text" />
                        Middle Name
                    </FlexRow>
                    <FlexRow>
                        <StyledInput id="text" type="text" />
                        Last Name
                    </FlexRow>
                </FlexColumn>

                <FlexColumn>
                    <FlexRow>
                        Birth Date
                        <StyledInput id="text" type="text" />
                        Month
                    </FlexRow>
                    <FlexRow>
                        <StyledInput id="text" type="text" />
                        Day
                    </FlexRow>
                    <FlexRow>

                        <StyledInput id="text" type="text" />
                        Year
                    </FlexRow>
                </FlexColumn>

                <FlexColumn>
                    <FlexRow>
                        Gender
                        <CheckboxWrapper>
                            <FlexRow>
                                <GenderColumn>
                                    <Checkbox type='radio'  /> Male</GenderColumn>
                            </FlexRow>
                            <FlexRow>
                                <GenderColumn>
                                    <Checkbox type='radio'  /> Female</GenderColumn>
                            </FlexRow>
                        </CheckboxWrapper>
                    </FlexRow>

                    <FlexRow>
                        Of which country are you a citizen ?
                        <StyledInputLarge id="text" type="text" />
                        <div></div>
                    </FlexRow>
                </FlexColumn>
                <FlexColumn>
                    <FlexRow>
                        Phone
                        <StyledInputLarge id="text" type="text" />

                    </FlexRow>
                    <FlexRow>
                        E- mail Address
                        <StyledInputLarge id="text" type="text" />
                        <div></div>
                    </FlexRow>
                </FlexColumn>
                <Centered>
                    <Apply id="text" type="submit" onClick={handleSubmit}>Apply</Apply>
                </Centered>
            </FormWrapper>

        }
    </ApplyNowWrapper>
};

export default ApplyNow;
import styled from "styled-components";


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


  background: #ffffff
`;

const StyledInputLarge = styled.input`
  width: 300px;
  height: 30px;

  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  border-radius: 35px;


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

const ApplyNow = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return <ApplyNowWrapper>
        <Title>COLLEGE ADDMISSIONS FORM</Title>
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
                            <FlexColumn>
                                <Checkbox type='radio'  /> Male</FlexColumn>
                        </FlexRow>
                        <FlexRow>
                            <FlexColumn>
                                <Checkbox type='radio'  /> Female</FlexColumn>
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
                <StyledInput id="text" type="submit" value='Apply' onSubmit={handleSubmit}/>

            </Centered>
        </FormWrapper>
    </ApplyNowWrapper>
};

export default ApplyNow;
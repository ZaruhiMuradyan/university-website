import styled from "styled-components";
import {useCallback, useState} from "react";
import { Dropdown } from 'primereact/dropdown';


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

  background: #ffffff;
  color: grey;
  font-size: 16px
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
  position: relative;
  width: 300px;
  height: 30px;
cursor: pointer;
  border-color: #707070;
  border-width: 1px;
  border-style: solid;
  border-radius: 35px;
  padding-left: 20px;

  background: #ffffff;
  color: grey;
  font-size: 16px
`;

const FlexRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  height: 70px;
`;



const FlexColumn = styled.div`
  display: flex;
  column-gap: 40px;
  align-content: center;
  align-items: self-end;
  width: 800px;
  justify-content: space-between;
  height: 75px;
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
  width: 600px;
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
  width: 200px;
`;

const  ThankYou = styled.div`
  font-size: 40px;
  color: white;
  align-self: center;
  align-content: center;
  justify-self: center;
  align-items: center;
  width: 1000px;
  border: 1px solid white;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  
`;

const Absolute = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  position: absolute;
  background-color: white;
  top: 55px;
  border-radius: 11px;
  width: 300px;
  justify-content: center;
  align-items: center;
  z-index: 99999999999999;
  border: 1px solid grey;
  
`;

const DropdownItem = styled.div`
  display: flex;
    padding: 5px;
  cursor: pointer;
  flex-grow:1;
  width: 100%;
  justify-content: center;
  && {
    :hover{
     background-color: grey;
      color: white;
      border-radius: 10px
    }
  }
`;

const ApplyNow = () => {
    const [submitted,setSubmitted] = useState(false);
    const [open, setOpen] = useState(false);
    const specialities = ["Information technologies", "Graphics", "Robotics", "Linguistics"];

    const [selectedItem, setSelectedItem] = useState(specialities[0]);
    const handleOpen = () => {
        setOpen(!open);
    };


    const handleSubmit = (event) => {
        setSubmitted(true);
    };

    const handleSelect = useCallback( (item) => {
        setOpen(false);
        setSelectedItem(item);

    });

    const NameWrapper = styled.div`
      height: 20px;
    `;

    const CheckboxWrappppper = styled.div`
      padding-top: 10px;
    `;

    return <ApplyNowWrapper>
        <Title>COLLEGE ADDMISSIONS FORM</Title>
        {submitted ?
            <ThankYou>Your application has been successfully submitted! We will contact you shortly.</ThankYou>

        :
            <FormWrapper>
                <FlexColumn>
                    <FlexRow>
                        <NameWrapper>
                            Name
                        </NameWrapper>

                        <StyledInput id="text" type="text" />
                        <NameWrapper>
                            First Name
                        </NameWrapper>

                    </FlexRow>
                    <FlexRow>
                        <NameWrapper/>
                        <StyledInput id="text" type="text" />
                        <NameWrapper>Middle Name</NameWrapper>

                    </FlexRow>
                    <FlexRow>
                        <NameWrapper/>
                        <StyledInput id="text" type="text" />
                        <NameWrapper> Last Name</NameWrapper>
                    </FlexRow>
                </FlexColumn>

                <FlexColumn>
                    <FlexRow>
                        <CheckboxWrappppper>
                            <NameWrapper>Gender</NameWrapper>
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
                        <NameWrapper/>
                        </CheckboxWrappppper>
                    </FlexRow>
                    <FlexRow>
                        <NameWrapper>Birth Date</NameWrapper>
                        <StyledInput id="text" type="text" placeholder="01/01/2000" />
                        <NameWrapper>Month/Day/Year</NameWrapper>
                    </FlexRow>
                    <FlexRow>
                        <NameWrapper>    Of which country are you a citizen ?</NameWrapper>
                        <StyledInputLarge id="text" type="text" />
                        <NameWrapper/>
                    </FlexRow>
                </FlexColumn>

                <FlexColumn>
                    <FlexRow>
                    <CheckboxWrappppper>
                        <NameWrapper> Degree </NameWrapper>
                        <CheckboxWrapper>
                            <FlexRow>
                                <GenderColumn>
                                    <Checkbox type='radio'  /> BA</GenderColumn>
                            </FlexRow>
                            <FlexRow>
                                <GenderColumn>
                                    <Checkbox type='radio'  /> MA</GenderColumn>
                            </FlexRow>
                        </CheckboxWrapper>
                        <NameWrapper/>
                    </CheckboxWrappppper>
                    </FlexRow>
                    <FlexRow>
                        <NameWrapper> Speciality</NameWrapper>
                            <StyledInputLarge type="button" onClick={handleOpen} value={selectedItem}></StyledInputLarge>
                            {!!open && (<Absolute>
                                {specialities.map(item => (
                                    <DropdownItem onClick={() => handleSelect(item)}>{item}</DropdownItem>
                                ))}
                            </Absolute>)}
                        <NameWrapper/>
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
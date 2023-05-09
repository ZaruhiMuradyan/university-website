import {Rctable} from "../RC-TABLE/RcTable";
import styled from "styled-components";
import {AnnualTable} from "../ANNUAL-TABLE/RcTable";
import {StudentsTable} from "./StudentsTable/StudentsTable";
import {connect} from "react-redux";


const TuitionsWrapper  = styled.div`
  width: inherit;
  height: inherit;
`

const Text2 = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  padding: 30px;
`;

const Containers  = styled.div`
    font-size: 15px;
    color: grey;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    background-color: white;
    text-align: center;
    `

const Students = ({data}) => {
    return <TuitionsWrapper>
        <Text2>
            Students
        </Text2>
        <Containers>
            <StudentsTable data={data} />
        </Containers>
    </TuitionsWrapper>
};


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Students);
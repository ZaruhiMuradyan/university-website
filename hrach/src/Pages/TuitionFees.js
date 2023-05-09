import {Rctable} from "../RC-TABLE/RcTable";
import styled from "styled-components";
import {AnnualTable} from "../ANNUAL-TABLE/RcTable";
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

const TuitionFees = ({tuitionFees}) => {
    return <TuitionsWrapper>
        <Text2>
            B.A. tuition Fees
        </Text2>
        <Containers>
            <Rctable />
        </Containers>
        <Text2>
            ANNUAL TUITION FEES OF EU MASTERS DEGREE ACCORDING TO EACH PROFESSIONS
        </Text2>
        <Containers>
            <AnnualTable data={tuitionFees}/>
        </Containers>
    </TuitionsWrapper>
};


function mapStateToProps(state) {

    return state;
}

export default connect(mapStateToProps)(TuitionFees);
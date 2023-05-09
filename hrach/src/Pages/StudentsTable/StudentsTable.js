import Table from "rc-table";
import {connect} from "react-redux";

export const StudentsTable = ({data}) => {
    const columns = [
        {
            title: "Name, surname",
            dataIndex: "namesurname",
            key: "namesurname",
            width: 400,
        },
        {
            title: "English tests",
            dataIndex: "tests",
            key: "tests",
            width: 200,
        },
        {
            title: "Tuitions",
            dataIndex: "assignments",
            key: "assignments",
            width: 200,
        },
        {
            title: "Bachelor degree",
            dataIndex: "participation",
            key: "participation",
            width:200,
        },
        {
            title: "Grade Point Average",
            dataIndex: "overall",
            key: "overall",
            width:200,
        },
    ];


     return (
         <Table
             columns={columns}
             data={data}
             tableLayout="auto"
         />
     )
 };

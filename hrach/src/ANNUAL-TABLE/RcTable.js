import Table from "rc-table";

export const AnnualTable = ({data}) => {
    const columns = [
        {
            title: "Profession",
            dataIndex: "profession",
            key: "profession",
            width: 600,
        },
        {
            title: "Full time",
            dataIndex: "fullTime",
            key: "fullTime",
            width: 200,
        },
        {
            title: "Full time (foreigners)",
            dataIndex: "fullTimeF",
            key: "fullTimeF",
            width: 200,
        },
        {
            title: "Part Time",
            dataIndex: "partTime",
            key: "partTime",
            width:200,
        },
        {
            title: "Part Time (foreigners)",
            dataIndex: "partTimeF",
            key: "partTimeF",
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
